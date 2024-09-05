import Card from "./Card";

interface BlogListItemProps {
    title: string;
    content: string;
}

const BlogListItem: React.FC<BlogListItemProps> = ({
    title, content
}) => {
    return (
        <Card>
            <h2 className="text-2xl">{title}</h2>
            <p>{content}</p>
        </Card>
    );
};

export default BlogListItem;