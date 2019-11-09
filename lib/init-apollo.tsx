import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import fetch from 'isomorphic-unfetch';
import { IS_SERVER, API_URL } from '../config/config';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

type HttpLinkConfigType = {
  uri: any,
  credentials: any,
  fetch?: any
}

const create = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  console.log("API", API_URL)
  const httpLinkConfig: HttpLinkConfigType = {
    uri: API_URL,
    credentials: 'same-origin',
  }

  if (!IS_SERVER) {
    httpLinkConfig.fetch = fetch
  }


  return new ApolloClient({
    connectToDevTools: !IS_SERVER,
    ssrMode: IS_SERVER,
    link: createHttpLink(httpLinkConfig),
    cache: new InMemoryCache().restore(initialState)
  });
};

export default (initialState = {}) => {
  if (!process.browser) {
    return create(initialState);
  }
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};
