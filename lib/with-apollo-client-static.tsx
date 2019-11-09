import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import initApollo from './init-apollo';

interface IApolloProps {
  apolloState: Object
}

// should be used for pages, which should not be server side renderer
const withApolloClientStatic: any = (App: any) => {
  const Apollo: React.FunctionComponent<IApolloProps> = ({ apolloState }) => {
    const apolloClient = initApollo(apolloState)
    return (
      <ApolloProvider client={apolloClient}>
        <App apolloClient={apolloClient} />
      </ApolloProvider>
    );
  }

  Apollo.displayName = "Apollo Client (Static)"

  return Apollo;
};

export default withApolloClientStatic;