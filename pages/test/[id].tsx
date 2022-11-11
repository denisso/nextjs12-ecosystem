import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import moment from "moment";
type TProps = {
    generated: number;
};

const Page = ({ generated }: TProps) => {
    return (
        <>
            <div>{moment(generated).format("MMMM Do YYYY, h:mm:ss a")}</div>
            <div>
                <Link href="/">
                    <a>Goto Home</a>
                </Link>
            </div>
        </>
    );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            { params: { id: '1' } },
            {
                params: { id: '2' },
            },
        ],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    const props: TProps = { generated: Date.now() };
    return { props, revalidate: 3600 * 24 };
};
