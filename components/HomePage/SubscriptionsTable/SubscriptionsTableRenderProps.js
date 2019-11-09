import React from 'react';
import { Query } from '@apollo/react-components';
import get from 'lodash.get';
import SUBSCRIPTIONS_QUERY from './SUBSCRIPTIONS.graphql';
import s from './SubscriptionTable.scss';

const SubscriptionsTable = () => {
  return (
    <Query query={SUBSCRIPTIONS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <div className={s.SubscriptionTable}>
            <h2>Render props</h2>

            <div className={s.SubscriptionTable__Header}>Email</div>
            {get(data, 'subscriptions', []).map(subscription => (
              <div key={get(subscription, 'id')} className={s.SubscriptionTable__Row}>
                {get(subscription, 'email')}
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default SubscriptionsTable;
