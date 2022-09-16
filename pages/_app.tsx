import React from "react";
import type { AppProps } from "next/app";
import { Context } from "../Content";
import Modal from "../components/Modal";
function MyApp({ Component, pageProps }: AppProps) {
    const [modal, setModal] = React.useState(true);
    return (
        <>
            <Context.Provider value={{ modal, setModal }}>
                <Component {...pageProps} />
            </Context.Provider>
            <Modal open={modal} />
        </>
    );
}

export default MyApp;
