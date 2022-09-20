import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;800&family=Open+Sans:wght@700&family=Poppins:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
            <body className="font-dmsans dark:bg-darkGray-4">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
