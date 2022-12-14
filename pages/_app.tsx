import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";

const themeLigth: DefaultTheme = {
    colors: {
        primary: "#6b6b6b",
        secondary: "#7e96ff",
    },
};

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = React.useState(true);
    return (
        <>
            <ThemeProvider theme={themeLigth}>
                <GlobalStyle />

                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
