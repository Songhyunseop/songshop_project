import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta name='title' content='Github Repositories' />
          <meta name='description' content='github repositories list' />
          {/* <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Noto+Sans:wght@400;700&display=swap'
            rel='stylesheet'
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
