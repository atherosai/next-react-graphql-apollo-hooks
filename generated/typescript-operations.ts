export type Maybe<T> = T | null;
export type SubscribeMutationVariables = {
  input: SubscribeInput
};


export type SubscribeMutation = (
  { __typename?: 'Mutation' }
  & { subscribe: (
    { __typename?: 'Subscription' }
    & Pick<Subscription, 'id' | 'email'>
  ) }
);

export type SubscriptionsQueryVariables = {};


export type SubscriptionsQuery = (
  { __typename?: 'Query' }
  & { subscriptions: Maybe<Array<Maybe<(
    { __typename?: 'Subscription' }
    & Pick<Subscription, 'id' | 'email'>
  )>>> }
);

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  subscribe: Subscription,
};


export type MutationSubscribeArgs = {
  input: SubscribeInput
};

export type Query = {
   __typename?: 'Query',
  subscriptions?: Maybe<Array<Maybe<Subscription>>>,
};

export type SubscribeInput = {
  email: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  id: Scalars['ID'],
  email: Scalars['String'],
};
