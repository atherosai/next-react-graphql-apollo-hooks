import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { HOST } from '../../../config/config';

const MetaDataCustom = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${HOST}/static/graphql_mastery_fb.png`} />
      <meta name="twitter:image" content={`${HOST}/static/graphql_mastery_twitter.png`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="React + GraphQL starter kit based on Next.js" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={HOST} />
      <meta name="twitter:title" content={title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Article',
            headline: title,
            dateModified: '2019-04-23',
            author: {
              '@type': 'Person',
              name: 'David Mráz'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Atheros Intelligence',
              logo: {
                '@type': 'ImageObject',
                url: `${HOST}/static/apple-touch-icon.png`
              }
            },
            url: HOST,
            datePublished: '2019-04-23',
            image: `${HOST}/graphql_mastery_fb.jpg`
          })
        }}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@atherosai" />
      <meta name="twitter:creator" content="@david_mraz1" />
    </Head>
  );
};

MetaDataCustom.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default MetaDataCustom;
