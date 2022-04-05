import { Html, Head, Main, NextScript } from "next/document";
import { publicPath } from "../publicPath";

const MyDocument = (): JSX.Element => (
  <Html lang="ja">
    <Head />
    <body
      style={{
        background: `url(${publicPath("background_pattern.png")}) repeat`,
      }}
    >
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
