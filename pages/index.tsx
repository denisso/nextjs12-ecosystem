import React from "react";
import Link from "next/link";
import { Context } from "../Content";

const Home = () => {
    const { setModal } = React.useContext(Context);
    React.useEffect(() => {
        setModal(false);
    }, [setModal]);
    return (
        <>
            <div className="box">
                <h1>Home</h1>
                <Link href="/page">
                    <a onClick={() => setModal(true)}>Goto Page</a>
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
let loading = 0;

/**
 * loading delay imitation
 * @returns
 */
const waitMe = () =>
    new Promise((resolve) => setTimeout(() => resolve(loading++), 2000));
export async function getServerSideProps() {
    if (loading) await waitMe();
    return {
        props: {},
    };
}
