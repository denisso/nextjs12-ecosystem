import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const MarkdownEditor = () => {
    const [value, setValue] = React.useState("Initial value");

    const onChange = React.useCallback((value: string) => {
        setValue(value);
    }, []);

    return <SimpleMdeReact value={value} onChange={onChange} />;
};
