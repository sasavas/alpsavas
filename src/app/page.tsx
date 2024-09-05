import BlogList from "@/components/BlogList";
import Card from "@/components/Card";

export const Home = () => {
    return (
        <main className="">
            <div className="container flex flex-col gap-4 px-4 py-8 max-w-[80%] m-auto min-h-screen">
                <p className="text-4xl font-bold text-primaryText">Hi, I'm Alp Savas</p>
                <div>
                    <p className="text-l text-secondaryText">Software Developer. Currently working as a freelancer and consultant.</p>
                    <p className="text-l text-secondaryText">Proficient in .NET and Java Ecosystems. Hands-on experience with containerization technologies and Azure.</p>
                    <p className="text-l text-secondaryText">Has experience with React, Next and Angular frontend frameworks.</p>
                </div>
                <Card shadowColor="yellow">
                    <p>
                        This page is currently under construction.
                    </p>
                </Card>
                <div>
                    <BlogList />
                </div>
            </div>

        </main>
    );
};

export default Home;