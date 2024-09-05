import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const blogDirectory = path.join(process.cwd(), 'public/blogs');

export async function getBlogData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return parseMarkdown(fileContents);
}

async function parseMarkdown(markdownFileContent: string): Promise<BlogPost> {
  const { data, content } = matter(markdownFileContent);
  const mdxSource = await serialize(content);
  
  return {
    metadata: data as BlogMetaData,
    source: mdxSource,
  };
}
