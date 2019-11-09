import { GraphQLNonNull } from 'graphql';

import SubsribeInput from "./SubscribeInputType";
import Subscribe from "./SubscriptionType";
import { createSubscription } from "../../requests/subscription-requests"

const userMutations = {
  subscribe: {
    type: new GraphQLNonNull(Subscribe),
    args: {
      input: {
        type: new GraphQLNonNull(SubsribeInput)
      }
    },
    resolve: async ({}: any, { input }:any) => {
      const result = await createSubscription({}, input);
      return result;
    }
  }
};

export default userMutations;
