import React from "react";
import type { AppProps } from "next/app";
// import { ThemeProvider, styled } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function App({ Component, pageProps }: AppProps) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <div>
                    <Button
                        variant="contained"
                        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                    >
                        Toggle
                    </Button>
                    <span>Current: {mode}</span>
                </div>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
