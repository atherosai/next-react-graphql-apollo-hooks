import React from 'react';
import { GA_TRACKING_ID, CUSTOM_ENV } from '../../../config/config';



const MetaData = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {CUSTOM_ENV === 'staging' && <meta name="robots" content="noindex, nofollow" />}
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="theme-color" content="#D80098" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
      <link rel="android-chrome-icon" sizes="36x36" href="/favicons/android-chrome-36x36.png" />
      <link rel="android-chrome-icon" sizes="48x48" href="/favicons/android-chrome-48x48.png" />
      <link
        rel="android-chrome-icon"
        sizes="
            72x72"
        href="/favicons/android-chrome-72x72.png"
      />
      <link rel="android-chrome-icon" sizes="96x96" href="/favicons/android-chrome-96x96.png" />
      <link rel="android-chrome-icon" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
      <link rel="android-chrome-icon" sizes="144x144" href="/favicons/android-chrome-144x144.png" />
      <link rel="android-chrome-icon" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
      <link rel="android-chrome-icon" sizes="384x384" href="/favicons/android-chrome-384x384.png" />
      <link rel="android-chrome-icon" sizes="256x265" href="/favicons/android-chrome-384x384.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
        href="/favicons/apple-touch-startup-image-320x460.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
        href="/favicons/apple-touch-startup-image-640x920.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        href="/favicons/apple-touch-startup-image-640x1096.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        href="/favicons/apple-touch-startup-image-750x1294.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
        href="/favicons/apple-touch-startup-image-1182x2208.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
        href="/favicons/apple-touch-startup-image-1242x2148.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
        href="/favicons/apple-touch-startup-image-748x1024.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
        href="/favicons/apple-touch-startup-image-768x1004.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
        href="/favicons/apple-touch-startup-image-1496x2048.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
        href="/favicons/apple-touch-startup-image-1536x2008.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      {CUSTOM_ENV === 'production' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });
                    `
          }}
        />
      )}
    </>
  );
};
export default MetaData;
