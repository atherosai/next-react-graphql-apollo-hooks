import React, { useEffect } from 'react';
import { NextSeo, CourseJsonLd } from 'next-seo';
import { HOST } from '../config/config';
import '../theme/global.scss';
import Carousel from '../components/HomePage/Carousel/Carousel';
import Subscription from '../components/HomePage/Subscription/Subscription';
import SubscriptionsTable from '../components/HomePage/SubscriptionsTable/SubscriptionsTable';
import withApolloClientStatic from '../lib/with-apollo-client-static';
import Footer from '../components/HomePage/HomePageFooter/HomePageFooter';

const title = 'GraphQL courses and articles - Javascript, React and Node.js';
const description = 'Learn how to build modern Javascript apps with GraphQL courses and articles, with a focus on technologies such as GraphQL, React, Apollo and Node.js.';

const HomePage: React.FunctionComponent = () => {
  useEffect(() => {
    import('webfontloader').then((WebFont) => WebFont.load({
      google: {
        families: ['Montserrat'],
      },
    }));

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('service worker registration successful');
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.warn('service worker registration failed', err.message);
        });
    }
  }, []);
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://graphqlmastery.com',
          title,
          description,
          images: [{ url: `${HOST}/images/social_fb` }, { url: `${HOST}/images/social_twitter` }],
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: 'GraphQL Mastery',
        }}
        twitter={{
          handle: '@david_mraz1',
          site: '@atherosai',
          cardType: 'summary_large_image',
        }}
      />
      <CourseJsonLd
        courseName="GraphQL Language course"
        providerName="Course Provider"
        providerUrl="https://atheros.ai"
        description="GraphQL Mastery is a platform for learning to build GraphQL driven apps"
      />
      <header>
        <Carousel />
      </header>
      <main>
        <Subscription />
        <SubscriptionsTable />
      </main>
      <Footer />
    </>
  );
};

export default withApolloClientStatic(HomePage);
