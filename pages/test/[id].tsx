import axios from "axios"
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import moment from "moment";

type TProps = {
    generated: number;
    state: number;
};

const Page = ({ generated, state }: TProps) => {
    return (
        <>
            <div>{moment(generated).format("MMMM Do YYYY, h:mm:ss a")} state: {state}</div>
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
            { params: { id: "1" } },
            {
                params: { id: "2" },
            },
        ],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    // ...
    let state: number = 0
    try{
        state = (await axios.get("http://localhost:3000/api/getvar")).data.state
    }
    catch(err){
        console.log("error", err)
    }
    
    console.log("state", state)
    const props: TProps = { generated: Date.now(), state };
    return { props, revalidate: 3600 * 24 };
};
