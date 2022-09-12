import type { GetServerSideProps } from "next";
import Link from "next/link";

const Home = ({ name }: { name: string }) => {
    return <div><Link href="/post/123">Goto Page</Link></div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    console.log("Index getServerSideProps Context:params: ", context.params);
    return {
        props: { props: { name: "Home" } },
    };
};