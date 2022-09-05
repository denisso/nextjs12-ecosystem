import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../components/globalstyles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { Palette, ThemeOptions } from "@mui/material/styles";
import { Provider, useSelector } from "react-redux";
import store from "../store";
import { selectMode } from "../components/sliceMode";
import Layout from "../components/Layout";
interface IPalette extends Palette {
    myColor: string | {};
}
interface IThemeOptions extends ThemeOptions {
    palette: IPalette;
}
const ThemeWrapper = ({ children }: any) => {
    const mode = useSelector(selectMode);
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    myColor: mode === "light" ? "white" : "gray",
                },
            } as IThemeOptions),
        [mode]
    );
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <ThemeWrapper>
                    <Layout>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </Layout>
                </ThemeWrapper>
            </Provider>
        </>
    );
}
