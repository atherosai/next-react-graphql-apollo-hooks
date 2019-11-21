import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { IS_PROD } from '../config/config';
import initApollo from './init-apollo';

interface ApolloPropsI {
  apolloState: Record<string, any>;
}

// should be used for pages, which should not be server side renderer
const withApolloClientStatic: any = (App: any) => {
  const Apollo: React.FunctionComponent<ApolloPropsI> = ({ apolloState }) => {
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
