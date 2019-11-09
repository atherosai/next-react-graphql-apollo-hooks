import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import SubscriptionQueries from './subscription/SubscriptionQueries';
import SubscriptionMutations from './subscription/SubscriptionMutations';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: () => ({
      ...SubscriptionQueries
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: () => ({
      ...SubscriptionMutations
    })
  })
});

export default Schema;
