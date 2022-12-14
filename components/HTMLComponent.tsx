import React from "react";
import styled, { css } from "styled-components";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import Image, {ImageProps} from "next/image";
const imageMedia = css`
    height: 22rem;
    transition: 1s height;
    ${({ theme }) => theme.breakpoints.down("md")} {
        height: 18rem;
    }
    @media (max-width: 750px) {
        height: 15rem;
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
        height: 12rem;
    }
    @media (max-width: 500px) {
        height: 9.5rem;
    }
    @media (max-width: 400px) {
        height: 7rem;
    }
`;

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-indent: 2rem;
    ${({ theme }) => theme.breakpoints.down("md")} {
        text-indent: 1.2rem;
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
        text-indent: 0.5rem;
    }

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
        ${({ theme }) => theme.breakpoints.down("md")} {
            margin-left: 1.2rem;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
            margin-left: 0.5rem;
        }
        code {
            font-family: ${({ theme }) => theme.typography.fontSourceCode};
        }
        overflow-x: auto;
    }
    .LoadingLazy {
        margin: 1rem auto;
        ${imageMedia}
    }
`;

const ImageNextJs= ({ src, alt }: JSX.IntrinsicElements["img"]): JSX.Element => (
    <Image src={src || ""} alt={alt} />
);

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
                    img: ImageNextJs,
                },
            })
            .processSync(html).result;
    } catch (err) {}

    return result;
};
export const HTMLComponent = ({
    content,
    className,
    components
}: {
    content?: string;
    className?: string;
    components?: { [key: string]: React.ReactNode };
}) => {
    if (typeof content !== "string") return <></>;
    return (
        <Content className={className}>{HTML({ html: content || "", components })}</Content>
    );
};
