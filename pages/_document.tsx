import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

import MetaData from '../components/Common/MetaData/MetaData';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <MetaData />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
