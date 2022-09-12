import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Link from "next/link";

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
        fallback: false, // can also be true or 'blocking'
    };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
    console.log("context", context);
    const { params } = context;
    return {
        // Passed to the page component as props
        props: { post: { params } },
    };
};

const Post = ({ post }: any) => {
    // Render post...
    return (
        <div>
            <div>{JSON.stringify(post)}</div>
            <div>
                <Link href="/">Home</Link>
            </div>
        </div>
    );
};

export default Post;
