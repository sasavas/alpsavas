import Card from "./Card";

interface BlogListItemProps {
    blogSummary: BlogPostSummary;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ blogSummary }) => {
    const { slug, metadata } = blogSummary;

    return (
        <Card>
            <h4 className="text-xl">{metadata.title}</h4>
            <p className="mb-2 text-secondaryText">
                <span>{metadata.author}</span>{", "}<span className="italic">
                    {metadata.date}
                </span>
            </p>
            <p>{metadata.excerpt}...</p>
            <a href={`/blog/${slug}`}>
                <span className="underline text-secondaryText">
                    Read more
                </span>
            </a>
        </Card>
    );
};

export default BlogListItem;