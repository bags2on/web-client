import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <div id="app-drawers" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
