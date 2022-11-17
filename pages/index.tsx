import React from "react";
import Link from "next/link";

const Home = ({ name }: { name: string }) => {
    const [value, setValue] = React.useState("");
    return (
        <>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div>
                <Link href={`/post/${value}`}>Goto Page</Link>
            </div>
        </>
    );
};

export default Home;
