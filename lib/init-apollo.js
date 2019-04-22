import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import fetch from 'isomorphic-unfetch';
import { IS_SERVER, API_URL } from '../config/config';

let apolloClient = null;

const create = initialState => {
  return new ApolloClient({
    connectToDevTools: !IS_SERVER,
    ssrMode: IS_SERVER,
    link: createHttpLink({
      uri: API_URL,
      credentials: 'same-origin',
      fetch: !IS_SERVER && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
};

export default initialState => {
  if (!process.browser) {
    return create(initialState);
  }
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};
