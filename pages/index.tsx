import React from 'react';
import { NextSeo, CourseJsonLd } from 'next-seo';
import { HOST } from '../config/config';
import Carousel from '../components/HomePage/Carousel/Carousel';
// import Subscription from '../components/HomePage/Subscription/Subscription';
// import SubscriptionsTable from '../components/HomePage/SubscriptionsTable/SubscriptionsTable';
import withApolloClientStatic from '../lib/with-apollo-client-static';
import Footer from '../components/HomePage/HomePageFooter/HomePageFooter';
// import SubscriptionsTableRenderProps from '../components/HomePage/SubscriptionsTable/SubscriptionsTableRenderProps';
// import SubscriptionsTableHOC from '../components/HomePage/SubscriptionsTable/SubscriptionsTableHOC';

const title = 'GraphQL courses and articles - Javascript, React and Node.js';
const description =
  'Learn how to build modern Javascript apps with GraphQL courses and articles, with a focus on technologies such as GraphQL, React, Apollo and Node.js.';

const HomePage = () => {
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
          site_name: 'GraphQL Mastery'
        }}
        twitter={{
          handle: '@david_mraz1',
          site: '@atherosai',
          cardType: 'summary_large_image'
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
        {/* <SubscriptionsTable />
        <SubscriptionsTableRenderProps />
        <SubscriptionsTableHOC /> */}
        {/* <Subscription /> */}
      </main>
      <Footer />
    </>
  );
};

export default withApolloClientStatic(HomePage);
