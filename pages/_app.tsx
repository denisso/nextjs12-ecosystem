import React from "react";
import type { AppProps } from "next/app";
import { Context } from "../Context";

function MyApp({ Component, pageProps }: AppProps) {
    const [pages, setPages] = React.useState<string[]>([]);
    return (
        <Context.Provider value={{ pages, setPages }}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}

export default MyApp;
