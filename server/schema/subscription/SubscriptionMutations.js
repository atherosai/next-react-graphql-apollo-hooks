const { GraphQLNonNull } = require('graphql');

const SubsribeInput = require('./SubscribeInputType');
const Subscribe = require('./SubscriptionType');
const { createSubscription } = require('../../requests/subscription-requests');

const userMutations = {
  subscribe: {
    type: new GraphQLNonNull(Subscribe),
    args: {
      input: {
        type: new GraphQLNonNull(SubsribeInput)
      }
    },
    resolve: async (source, { input }, { ctx }) => {
      const result = await createSubscription({ ctx }, input);
      return result;
    }
  }
};

module.exports = userMutations;
