import BlogListItem from "./BlogListItem";
import { getAllBlogPosts } from "@/libs/blog/blogSlugListRetriever";
import Card from "./Card";

var allBlogs: BlogPostSummary[] = await getAllBlogPosts();

const BlogList = () => {
    return (
        <div className="flex flex-col gap-4">
            <Card className="flex flex-col gap-4">
                <h2 className="text-2xl text-center font-semibold">
                    Blog Posts
                </h2>
                <div className="w-full border-2 border-sky-100"></div>
                <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 gap-4">
                    {allBlogs.map(blog => {
                        return (
                            <BlogListItem key={blog.slug} blogSummary={blog} />
                        );
                    })}
                </div>
            </Card>
        </div>
    );
};

export default BlogList;