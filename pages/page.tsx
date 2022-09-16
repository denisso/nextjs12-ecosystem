import React from "react";
import Link from "next/link";
import { Context } from "../Content";

const Page = () => {
    const { setModal } = React.useContext(Context);
    React.useEffect(() => {
        setModal(false);
    }, [setModal]);
    return (
        <>
            <div className="box">
                <h1>Page</h1>

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
