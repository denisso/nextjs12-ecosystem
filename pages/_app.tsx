import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";

const themeLigth: DefaultTheme = {
    colors: {
        primary: "#6b6b6b",
        secondary: "#7e96ff",
    },
    breakpoints: {
        xs: 0,
        xm: 400,
        sm: 600,
        md: 820,
        lg: 1040,
        xl: 1500,
    },
};

export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <ThemeProvider theme={themeLigth}>
                <GlobalStyle />

                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
