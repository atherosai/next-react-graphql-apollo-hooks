import React from 'react';
import get from 'lodash.get';
import App from 'next/app';
import Router from 'next/router';
import { pageview } from '../lib/gtag';
import { NODE_ENV, CUSTOM_ENV } from '../config/config';
import globalStyle from '../theme/global.scss';

if (CUSTOM_ENV === 'production') {
  Router.onRouteChangeComplete = url => {
    pageview(url);
  };
}

class MyApp extends App {
  componentDidMount() {
    import('webfontloader').then(WebFont =>
      WebFont.load({
        google: {
          families: ['Montserrat']
        }
      })
    );
    if ('serviceWorker' in navigator && NODE_ENV === 'production') {
      get(navigator, 'serviceWorker').register('/service-worker.js');
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className={globalStyle.Global}>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
