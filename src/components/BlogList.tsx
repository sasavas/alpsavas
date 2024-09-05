import { title } from "process";
import BlogListItem from "./BlogListItem";

const blogList: readonly BlogListItemType[] =
    [
        { title: "Blog 1", content: "Content 1" },
        { title: "blog 2", content: "content 2" }
    ] as const;

const BlogList = () => {
    return (
        <div className="flex flex-col gap-4">
            {blogList.map(blog => {
                return (
                    <BlogListItem key={blog.title} title={blog.title} content={blog.content} />
                );
            })}
        </div>
    );
};

export default BlogList;