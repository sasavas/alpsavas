import { metadata } from "@/app/layout";
import BlogListItem from "./BlogListItem";
import { getAllBlogPosts } from "@/libs/blog/blogSlugListRetriever";

var allBlogs: BlogPostSummary[] = await getAllBlogPosts();

const BlogList = () => {
    return (
        <div className="flex flex-col gap-4">
            {allBlogs.map(blog => {
                return (
                    <BlogListItem key={blog.slug} blog={blog} />
                );
            })}
        </div>
    );
};

export default BlogList;