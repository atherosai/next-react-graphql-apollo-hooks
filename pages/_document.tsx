import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import s from '../theme/global.scss';

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
        <body className={s.global}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
