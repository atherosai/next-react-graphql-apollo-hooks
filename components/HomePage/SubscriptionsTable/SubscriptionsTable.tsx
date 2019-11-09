import React from 'react';
import get from "lodash.get";
import uuid from "uuid/v1"
import { useQuery } from '@apollo/react-hooks';
import SUBSCRIPTIONS_QUERY from './SUBSCRIPTIONS.graphql';
import { SubscriptionsQuery, SubscriptionsQueryVariables } from "../../../generated/typescript-operations";
import s from './SubscriptionTable.scss';

const SubscriptionsTable: any = () => {
  const { data, loading, error } = useQuery<SubscriptionsQuery, SubscriptionsQueryVariables>(SUBSCRIPTIONS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={s.SubscriptionTable}>
      <h2>React Hooks</h2>

      <div className={s.SubscriptionTable__Header}>Email</div>
      {data && data.subscriptions && data.subscriptions.map(subscription => (
        <div key={get(subscription, 'id', uuid())} className={s.SubscriptionTable__Row}>
          {get(subscription, 'email')}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionsTable;
