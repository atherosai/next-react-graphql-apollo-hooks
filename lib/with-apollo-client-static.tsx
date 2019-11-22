import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { IS_PROD } from '../config/config';
import initApollo from './init-apollo';


interface AppPropsI {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

interface ApolloPropsI {
  apolloState: NormalizedCacheObject;
}
// should be used for pages, which should not be server side renderer
const withApolloClientStatic: Function = (App: React.FunctionComponent<AppPropsI>) => {
  const Apollo: React.FunctionComponent<ApolloPropsI> = ({ apolloState }: ApolloPropsI) => {
    const apolloClient = initApollo(apolloState);
    return (
      <ApolloProvider client={apolloClient}>
        <App apolloClient={apolloClient} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (!IS_PROD) {
    const displayName = Apollo.displayName || Apollo.name || 'Component';

    if (displayName === 'App') {
      // eslint-disable-next-line no-console
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    Apollo.displayName = `withApollo(${displayName})`;
  }

  return Apollo;
};

export default withApolloClientStatic;
