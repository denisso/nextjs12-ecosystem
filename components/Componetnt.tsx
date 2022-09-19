import React from "react";
import Link from "next/link";

export const Component = ({ name, path }: any) => {
    return (
        <>
            <div className="box">
                <h1>{name}</h1>

                <Link href={path}>
                    <a>Goto {name === "Page" ? "Home" : "Page"}</a>
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

export default Component;
