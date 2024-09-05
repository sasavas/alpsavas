import fs from 'fs';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'blogs');

export function getAllBlogSlugs() {
  const filenames = fs.readdirSync(blogDirectory);

  // Remove the file extension to get the slug
  return filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ''),
      },
    };
  });
}
