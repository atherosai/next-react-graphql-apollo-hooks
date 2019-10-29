import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash.get';
import SUBSCRIPTIONS_QUERY from './Subscriptions.graphql';
import s from './SubscriptionTable.scss';
import initialState from '../../../lib/init-apollo';

const client = initialState({});

const SubscriptionsTable = () => {
  const { data, loading, error } = useQuery(SUBSCRIPTIONS_QUERY, {
    client
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={s.SubscriptionTable}>
      <h2>React Hooks</h2>

      <div className={s.SubscriptionTable__Header}>Email</div>
      {get(data, 'subscriptions', []).map(subscription => (
        <div key={get(subscription, 'id')} className={s.SubscriptionTable__Row}>
          {get(subscription, 'email')}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionsTable;
