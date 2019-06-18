import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="shortcut icon" href="/static/tooth.jpg" type="image/x-icon" />
        </Head>
        <body>
          //<Main />
          <div>
            <img src="/static/logo.jpeg" alt="Logo" />
            <h3>Estamos em atualização...</h3>
            <h5>Obrigado!</h5>
          </div>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>
            AOS.init();
          </script>
          <NextScript />
        </body>
      </html>
    );
  }
}
