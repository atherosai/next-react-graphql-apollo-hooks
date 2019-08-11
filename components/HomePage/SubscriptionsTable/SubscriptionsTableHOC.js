import React from 'react';
import { graphql } from '@apollo/react-hoc';
import get from 'lodash.get';
import SUBSCRIPTIONS_QUERY from './Subscriptions.graphql';
import s from './SubscriptionTable.scss';

const withSubscriptionQuery = graphql(SUBSCRIPTIONS_QUERY);

const SubscriptionsTable = ({ data, loading, error }) => {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={s.SubscriptionTable}>
      <h2>Higher-Order component</h2>
      <div className={s.SubscriptionTable__Header}>Email</div>
      {get(data, 'subscriptions', []).map(subscription => (
        <div key={get(subscription, 'id')} className={s.SubscriptionTable__Row}>
          {get(subscription, 'email')}
        </div>
      ))}
    </div>
  );
};

export default withSubscriptionQuery(SubscriptionsTable);
