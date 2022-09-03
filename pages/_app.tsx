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
const themeDark: DefaultTheme = {
    colors: {
        primary: "#161616",
        secondary: "#0070f3",
    },
};
export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = React.useState(true);
    return (
        <>
            <ThemeProvider theme={theme ? themeLigth : themeDark}>
                <GlobalStyle />
                <div>
                    <button onClick={() => setTheme(!theme)}>Toggle</button>
                    <span>Current: {theme? "Light": "Dark"}</span>
                </div>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
