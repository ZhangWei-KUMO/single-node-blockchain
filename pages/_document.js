import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/lang
      <html lang="zh-Hans">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="苏州云帧数浪信息科技有限公司官网" />
          <meta name="keywords" content="苏州小程序,苏州微信公众号,苏州安卓App制作,苏州云服务,小程序,微信公众号" />
          <link rel="shortcut icon" href="/static/favicon.png" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;