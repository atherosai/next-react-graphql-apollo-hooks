const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');

const SubscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

module.exports = SubscriptionType;
