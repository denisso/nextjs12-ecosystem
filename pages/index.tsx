import React from "react";
import Link from "next/link";

const Home = ({ date }: any) => {
    return (
        <>
            <div className="box">
                <h1>Home </h1>
                <div>Today {date}</div>
                <Link href="/page">
                    <a>Goto Page</a>
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

export default Home;

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
