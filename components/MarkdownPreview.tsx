import React from "react"
import styled from "styled-components";
import { MarkdownEditor } from "./MarkdownEditor";
import { HTMLComponent } from "./HTMLComponent";
import { down, up } from "styled-breakpoints";
import { Context } from "./Context";
const Container = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
    ${down("lg")} {
        flex-direction: column;
    }
    ${up("lg")} {
        & > * {
            flex-basis: calc(50% - .5rem);
            flex-shrink: 0;
            display: flex;
        }
    }
`;

export const MarkdownPreview = () => {
    const [data, setData] = React.useState("")
    return (
        <Context.Provider value={{data, setData}}>
            <Container className="Container">
                <MarkdownEditor />
                <HTMLComponent />
            </Container>
        </Context.Provider>
    );
};
