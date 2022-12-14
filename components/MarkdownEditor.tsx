import React from "react";
import dynamic from 'next/dynamic';
const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });
import "easymde/dist/easymde.min.css";

export const MarkdownEditor = () => {
    const [value, setValue] = React.useState("Initial value");

    const onChange = React.useCallback((value: string) => {
        setValue(value);
    }, []);

    return <SimpleMdeReact value={value} onChange={onChange} />;
};
