import type { GetServerSideProps } from "next";
import Link from "next/link";

const Post = ({ name, params }: any) => {
    // Render post...
    return (
        <div>
            <div>
                {name} - {JSON.stringify(params)}
            </div>
            <div>
                <Link href="/">Home</Link>
            </div>
        </div>
    );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context.params)
    return {
        props: { name: "Page",  params: context.params},
    };
};
