import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkHighlightjs from "remark-highlight.js";

type Node = {
    type: string; // for example 'element'
    tagName: string; // for example "p"
    properties: { [key: string]: any }; //
    children: Array<Node>;
    position: {
        start: { line: number; column: number; offset: number }; // { line: 1, column: 1, offset: 0 }
        end: { line: number; column: number; offset: number };
    };
};

const parse = (node: Node) => {
    try {
        switch (true) {
            case node instanceof Object:
                if (node.type !== "element") return;

                if (node.tagName === "a") {
                    node.properties.target = "_blank";
                    return;
                }

                if (node.children)
                    for (const child of node.children) parse(child as Node);
                break;
            default:
        }
    } catch (err) {}
};

const parseElements = () => {
    return (props: Node) => {
        const { children } = props;
        if (!Array.isArray(children)) return;
        for (const child of children) parse(child);
    };
};
export const convertMarkdownToHtml = (markdownString: string): string => {
    try {
        return unified()
            .use(remarkParse)
            .use(remarkHighlightjs)
            .use(remarkRehype,{allowDangerousHtml:true})
            .use(rehypeStringify,{allowDangerousHtml: true})
            .use(parseElements)
            .processSync(markdownString)
            .toString();
    } catch (error: any) {
        let errorMessage = "unknown error while HTML processing";
        if (typeof error === "string") {
            errorMessage = error;
        }
        else if(error?.message){
            errorMessage = error.message
        }


        return errorMessage;
    }
};
