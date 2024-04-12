import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script
          disable-devtool-auto
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
          data-url="http://localhost:3000"
        ></Script>
      </body>
    </Html>
  );
}
