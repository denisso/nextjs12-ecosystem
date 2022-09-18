import React from "react";
import type { AppProps } from "next/app";
import { Context } from "../Context";
import Modal from "../components/Modal";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
    const [modal, setModal] = React.useState(false);
    const router = useRouter();
    React.useEffect(() => {
        router.events.on("routeChangeStart", () => setModal(true));
        router.events.on("routeChangeComplete", () => setModal(false));
        router.events.on("routeChangeError", () => setModal(false));
    }, [router]);
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
