import React from "react";
import styled from "styled-components";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { Context } from "./Context";

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-indent: 2rem;
    overflow-x: auto;
    ul,
    ol {
        list-style-position: inside;
    }
    li {
        & > * {
            display: inline;
        }
        ul,
        ol {
            display: block;
            margin-left: 1rem;
        }
    }

    * + h1,
    * + h2,
    * + h3,
    * + h4,
    * + h5,
    * + h6 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }
    & a {
        text-decoration: underline !important;
    }
    pre {
        text-indent: 0;
        margin-left: 2rem;

        overflow-x: auto;
    }
    blockquote {
        margin: 0;
        text-indent: 0;
        color: rgba(0, 0, 0, 0.5);
        padding-left: calc(2rem - 5px);
        border-left: 5px solid rgba(0, 0, 0, 0.1);
    }

    img {
        margin: 1rem auto;
        display: block;
        max-width: 100%;
        height: 100%;
    }
    iframe {
        width: 560px;
        height: 315px;
        margin: 0 auto;
        display: block;
    }
`;

export const HTML = ({
    html,
    components,
}: {
    html: string;
    components?: { [key: string]: React.ReactNode };
}) => {
    let result = <></>;
    try {
        result = unified()
            .use(rehypeParse, { fragment: true })
            .use(rehypeReact, {
                createElement: React.createElement,
                components: {
                    ...components,
                },
            })
            .processSync(html).result;
    } catch (err) {}

    return result;
};

const Container = styled.div`
    border: 1px solid #ced4da;
    display: flex;
    flex-direction: column;
    .Title {
        height: 3rem;
        margin: 0;
        border-bottom: 1px solid #ced4da;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
    }
    .Content {
        padding: 1rem;
    }
`;

export const HTMLComponent = ({
    className,
    components,
}: {
    className?: string;
    components?: { [key: string]: React.ReactNode };
}) => {
    const { data } = React.useContext(Context);
    return (
        <Container
            className={`HTMLComponent${className ? " " + className : ""}`}
        >
            <h2 className="Title">HTML:</h2>
            <Content className="Content">
                {HTML({ html: data || "", components })}
            </Content>
        </Container>
    );
};
