import React from 'react';
import PropTypes from 'prop-types';
import initApollo from './init-apollo';

export default App => {
  class Apollo extends React.Component {
    static displayName = 'withApollo(App)';

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  }

  Apollo.propTypes = {
    apolloState: PropTypes.object
  };

  return Apollo;
};
