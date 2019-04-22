const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const SubscriptionQueries = require('./subscription/SubscriptionQueries');
const SubscriptionMutations = require('./subscription/SubscriptionMutations');

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

module.exports = Schema;
