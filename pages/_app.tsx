import React from "react"
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    React.useEffect(() => {
        router.events.on("routeChangeStart", () => console.log("routeChangeStart"));
        router.events.on("routeChangeComplete", () => console.log("routeChangeComplete"));
        router.events.on("routeChangeError", () => console.log("routeChangeError"));
    }, [router]);
    return <Component {...pageProps} router={router} />;
}

export default MyApp;
