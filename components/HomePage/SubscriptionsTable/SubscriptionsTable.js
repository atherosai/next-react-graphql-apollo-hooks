import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import get from 'lodash.get';
import SUBSCRIPTIONS_QUERY from './Subscriptions.graphql';
import s from './SubscriptionTable.scss';

const SubscriptionsTable = () => {
  const subscriptions = useQuery(SUBSCRIPTIONS_QUERY);
  return (
    <div className={s.SubscriptionTable}>
      <div className={s.SubscriptionTable__Header}>Email</div>
      {get(subscriptions, 'data.subscriptions', []).map(subscription => (
        <div key={get(subscription, 'id')} className={s.SubscriptionTable__Row}>
          {get(subscription, 'email')}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionsTable;
