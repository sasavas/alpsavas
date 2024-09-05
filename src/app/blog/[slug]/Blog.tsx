'use client';

import './page.css';
import dynamic from 'next/dynamic';

// Dynamically import MDXRemote
const MDXRemote = dynamic(() => import('next-mdx-remote').then(mod => mod.MDXRemote), {
  ssr: false,
});

interface BlogProps {
    blog: BlogPost;
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
    const { metadata, source } = blog;

    return (
        <article>
            <h1 className="">{metadata.title}</h1>
            <p>
                <span>{metadata.author}</span>
                {", "}
                <span className='italic'>{metadata.date}</span>
            </p>
            <MDXRemote {...source} />
        </article>
    );
};


export default Blog;