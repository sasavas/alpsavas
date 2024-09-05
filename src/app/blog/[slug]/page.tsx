import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const blogDirectory = path.join(process.cwd(), 'public/blogs');

// Function to generate static paths
export async function generateStaticParams() {
  const filenames = fs.readdirSync(blogDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// Fetching and rendering blog content
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    notFound(); // Handle 404 if the file doesn't exist
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}