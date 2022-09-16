import React from "react";
import Link from "next/link";
import { Context } from "../Context";

const Page = ({ date }: any) => {
    const { setModal } = React.useContext(Context);
    React.useEffect(() => {
        setTimeout(() => setModal(false), 500);
    }, [setModal]);
    return (
        <>
            <div className="box">
                <h1>Page</h1>
                <div>Today { date }</div>
                <Link href="/">
                    <a onClick={() => setModal(true)}>Goto Home</a>
                </Link>
            </div>
            <style jsx>{`
                .box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </>
    );
};

export default Page;

/**
 * loading delay imitation
 * @returns
 */
const waitMe = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve(new Date().toUTCString()), 2000)
    );

export async function getServerSideProps() {
    return {
        props: { date: await waitMe() },
    };
}
