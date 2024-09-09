import BlogList from "@/app/components/BlogList";
import Card from "@/app/components/Card";
import NavMenu from "./components/NavMenu";

export default function Home() {
    return (
        <main className="">
            <div className="container min-h-screen flex flex-col gap-4 py-12 w-[95%] lg:w-[80%] xl:max-w-[60rem] mx-auto">
                <Card shadowColor="yellow">
                    <p>
                        This page is currently under construction.
                    </p>
                </Card>
                <Card className="flex gap-4">
                    <NavMenu />
                </Card>
                <Card className="flex flex-col gap-8 md:flex-row md:items-center">
                    <img className="self-center md:self-auto m-2 rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-sky-200 border-4" src="./images/profile.jpg" alt="Profile Image" />
                    <div>
                        <h1 className="text-4xl text-center md:text-left font-bold text-primaryText mb-4">Hi, I'm Alp Savas</h1>
                        <p className="text-l text-secondaryText">Software Developer. Currently working as a freelancer and consultant.</p>
                        <p className="text-l text-secondaryText">Proficient in .NET and Java Ecosystems. Hands-on experience with containerization technologies and Azure.</p>
                        <p className="text-l text-secondaryText">Has experience with React, Next and Angular frontend frameworks.</p>
                    </div>
                </Card>
                <div>
                    <BlogList />
                </div>
            </div>
        </main>
    );
};