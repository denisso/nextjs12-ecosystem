import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }
    render(): JSX.Element {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    {/* Here we will mount our modal portal */}
                    <div id="modal" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
