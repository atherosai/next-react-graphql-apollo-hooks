import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

import MetaData from '../components/Common/MetaData/MetaData';

class MyDocument extends Document {
  componentDidMount() {
    import('webfontloader').then(WebFont => WebFont.load({
      google: {
        families: ['Montserrat']
      }
    })
    );
  }
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
