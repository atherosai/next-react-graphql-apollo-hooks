import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const SubscribeDocument = gql`
    mutation Subscribe($input: SubsribeInput!) {
  subscribe(input: $input) {
    id
    email
  }
}
    `;
export type SubscribeMutationFn = ApolloReactCommon.MutationFunction<SubscribeMutation, SubscribeMutationVariables>;
export type SubscribeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SubscribeMutation, SubscribeMutationVariables>, 'mutation'>;

    export const SubscribeComponent = (props: SubscribeComponentProps) => (
      <ApolloReactComponents.Mutation<SubscribeMutation, SubscribeMutationVariables> mutation={SubscribeDocument} {...props} />
    );
    
export type SubscribeProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SubscribeMutation, SubscribeMutationVariables> & TChildProps;
export function withSubscribe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SubscribeMutation,
  SubscribeMutationVariables,
  SubscribeProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SubscribeMutation, SubscribeMutationVariables, SubscribeProps<TChildProps>>(SubscribeDocument, {
      alias: 'subscribe',
      ...operationOptions
    });
};
export type SubscribeMutationResult = ApolloReactCommon.MutationResult<SubscribeMutation>;
export type SubscribeMutationOptions = ApolloReactCommon.BaseMutationOptions<SubscribeMutation, SubscribeMutationVariables>;
export const SubscriptionsDocument = gql`
    query Subscriptions {
  subscriptions {
    id
    email
  }
}
    `;
export type SubscriptionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SubscriptionsQuery, SubscriptionsQueryVariables>, 'query'>;

    export const SubscriptionsComponent = (props: SubscriptionsComponentProps) => (
      <ApolloReactComponents.Query<SubscriptionsQuery, SubscriptionsQueryVariables> query={SubscriptionsDocument} {...props} />
    );
    
export type SubscriptionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<SubscriptionsQuery, SubscriptionsQueryVariables> & TChildProps;
export function withSubscriptions<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SubscriptionsQuery,
  SubscriptionsQueryVariables,
  SubscriptionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SubscriptionsQuery, SubscriptionsQueryVariables, SubscriptionsProps<TChildProps>>(SubscriptionsDocument, {
      alias: 'subscriptions',
      ...operationOptions
    });
};
export type SubscriptionsQueryResult = ApolloReactCommon.QueryResult<SubscriptionsQuery, SubscriptionsQueryVariables>;