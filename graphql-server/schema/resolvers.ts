import { getSubscriptions } from '../requests/subscription-requests';
import { createSubscription } from "../requests/subscription-requests"
import { Resolvers } from "../generated/resolver-types";
interface StringIndexSignatureInterface {
    [index: string]: any
  }
  
type StringIndexed<T> = T & StringIndexSignatureInterface

const resolvers: StringIndexed<Resolvers> = {
    Query: {
        subscriptions: () => getSubscriptions(),
    },
    Mutation: {
        subscribe: async (__, args) => {
            return createSubscription({}, args);
        }
    }
}

export default resolvers;