import fs from 'fs';
import path from 'path';
import Blog from './Blog';
import { getBlogData } from '@/libs/blog/blogDataRetriever';

const blogDirectory = path.join(process.cwd(), 'public/blogs');

// Function to generate static paths
export async function generateStaticParams() {
    const filenames = fs.readdirSync(blogDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
    }));
}

// Fetching and rendering blog content
export default async function BlogPost({ params }: { params: { slug: string; }; }) {
    const { slug } = params;

    const blog = await getBlogData(slug);
    
    return (
        <Blog blog={blog}></Blog>
    );
}