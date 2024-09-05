import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'public/blogs');

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const filenames = fs.readdirSync(blogDirectory);

  const posts = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content);

    return {
      slug: filename.replace(/\.md$/, ''),
      metadata: data as BlogMetaData,
      source: mdxSource,
      excerpt:  + '...',
    };
  }));

  return posts;
}