import React from "react";
import Link from "next/link";
import { Context } from "../Context";

const NotFound = () => {
    const { setModal } = React.useContext(Context);
    React.useEffect(() => {
        setTimeout(() => setModal(false), 500);
    }, [setModal]);
    return (
        <>
            <div className="box">
                <h1>Page Not Found</h1>
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

export default NotFound;

