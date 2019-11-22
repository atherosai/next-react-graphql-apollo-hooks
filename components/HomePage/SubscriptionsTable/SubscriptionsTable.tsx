import React from 'react';
import get from 'lodash.get';
import uuid from 'uuid/v1';
import { useQuery } from '@apollo/react-hooks';
import SUBSCRIPTIONS_QUERY from './SUBSCRIPTIONS.graphql';
import { SubscriptionsQuery, SubscriptionsQueryVariables } from '../../../generated/typescript-operations';
import s from './SubscriptionsTable.scss';

const SubscriptionsTable: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery<SubscriptionsQuery,
  SubscriptionsQueryVariables>(SUBSCRIPTIONS_QUERY);

  if (loading) return <>Loading...</>;
  if (error) return <>{`Error! ${error.message}`}</>;

  return (
    <div className={s.SubscriptionTable}>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {data && data.subscriptions && data.subscriptions.map((subscription) => (
            <tr key={get(subscription, 'id', uuid())}>
              <td>
                {get(subscription, 'email')}
              </td>
              <td>
                {get(subscription, 'source')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default SubscriptionsTable;
