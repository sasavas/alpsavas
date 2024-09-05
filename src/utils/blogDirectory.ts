import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'blogs');

export function getBlogData(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);

  return {
    metadata: data, // This contains title, date, author, etc.
    content,       // This contains the markdown content
  };
}
