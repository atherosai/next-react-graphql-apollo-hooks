import { GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql';
import { getSubscriptions } from '../../requests/subscription-requests';
import Subscription from './SubscriptionType';

const userQueries = {
  monitoring: {
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: () => true
  },
  subscriptions: {
    type: new GraphQLList(Subscription),
    resolve: () => getSubscriptions()
  }
};

export default userQueries;
