import React from "react";

import type { NextPage } from "next";
import axios from "axios";
import Link from "next/link";
import { Context } from "../Context";
const revalidate = (id: string): Promise<string> =>
    new Promise((resolve, reject) => {
        axios
            .get(`/api/revalidate?id=${id}`)
            .then(({ data }: { data: { revalidated: boolean } }) => {
                if (data.revalidated) {
                    resolve(id);
                } else {
                    resolve("");
                }
            })
            .catch((err) => reject(err.message));
    });

const Home: NextPage = () => {
    const { pages, setPages } = React.useContext(Context);
    const [value, setValue] = React.useState<string>("");
    const [response, setResponse] = React.useState("1");
    const [error, setError] = React.useState("");

    const handleRequst = async (id: string) => {
        try {
            await revalidate(id);
            setResponse(id);
            if (!pages.includes(id)) {
                pages.push(id);
                setPages([...pages]);
            }
            setError("");
        } catch (err: any) {
            setError(err);
        }
    };
    return (
        <>
            <div>
                <input
                    type="number"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button onClick={() => handleRequst(value)}>
                    {"push request"}
                </button>
            </div>
            <div>
                last successful response {response} / Error {error}{" "}
            </div>
            <div>
                {pages.map((id) => (
                    <div key={id}>
                        <Link href={`/test/${id}`}>
                            <a>Goto: {`/test/${id}`}</a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
