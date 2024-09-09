import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode,
    className?: string,
    shadowColor?: string,
}

const Card: React.FC<WrapperProps> = ({ children, className, shadowColor }) => {
    const style = {
        boxShadow: `0.2rem 0.4rem ${shadowColor || 'aliceblue'}`
    };
    return (
        <div
            className={`px-6 py-4 border border-lightGray rounded-xl ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Card;