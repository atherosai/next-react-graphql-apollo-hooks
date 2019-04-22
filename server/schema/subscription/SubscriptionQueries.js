const { GraphQLBoolean, GraphQLNonNull, GraphQLList } = require('graphql');
const { getSubscriptions } = require('../../requests/subscription-requests');
const Subscription = require('./SubscriptionType');

const userQueries = {
  monitoring: {
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: () => true
  },
  subscriptions: {
    type: new GraphQLList(Subscription),
    resolve: (source, args, { ctx }) => getSubscriptions({ ctx })
  }
};

module.exports = userQueries;
