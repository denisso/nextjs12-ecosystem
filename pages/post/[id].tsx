import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from 'next/router'

const Post = ({ name, params }: any) => {
    // Render post...
    const router = useRouter()
    return (
        <div>
            <div>
                {name} - {JSON.stringify(params)}
            </div>
            <div>Router: pathname - {router.pathname}, asPath - {router.asPath}, basePath - {router.basePath}</div>
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
