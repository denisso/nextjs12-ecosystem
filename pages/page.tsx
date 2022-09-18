import React from "react";
import Link from "next/link";

const Page = ({ date }: any) => {
    return (
        <>
            <div className="box">
                <h1>Page</h1>
                <div>Today {date}</div>
                <Link href="/">
                    <a>Goto Home</a>
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
