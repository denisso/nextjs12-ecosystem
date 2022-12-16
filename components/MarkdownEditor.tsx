import React from "react";
import dynamic from "next/dynamic";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
});
import "easymde/dist/easymde.min.css";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import { Context } from "./Context";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .Editor {
        width: 100%;
    }
    .Controls {
        height: 3rem;
        position: sticky;
        bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
type TResponse = {
    data?: string;
    error?: string;
};

// interface IgetHTML {
//     (url: string, options: { arg: string }): Promise<TResponse>;
// }

export const MarkdownEditor = () => {
    const [value, setValue] = React.useState("Initial value");
    const [shouldFetch, setShouldFetch] = React.useState(false);
    const { setData } = React.useContext(Context);
    const onChange = React.useCallback((value: string) => {
        setValue(value);
    }, []);

    const convertHTML = async () => {
        axios
            .post("/api/convert", { content: value })
            .then(({ data }: AxiosResponse<TResponse>) => {
                setShouldFetch(false);
                if(typeof data.data === "string"){
                    setData(data.data)
                }
            })
            .catch(() => {
                setShouldFetch(false);
            });
        setShouldFetch(true);
    };
    return (
        <Container className="EditorContainer">
            <SimpleMdeReact
                value={value}
                onChange={onChange}
                className="Editor"
            />
            <div className="Controls">
                <button disabled={shouldFetch} onClick={convertHTML}>
                    Convert to HTML
                </button>
            </div>
        </Container>
    );
};
