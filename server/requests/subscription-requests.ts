import genId from '../lib/gen-id';
import { MutationSubscribeArgs } from '../generated/resolver-types';

const subscriptions = [
  {
    id: genId(),
    email: 'david@atheros.ai',
  },
];

export const createSubscription = async (_: any, args: MutationSubscribeArgs) => {
  const { input: { email } } = args;
  const newSubscription = {
    id: genId(),
    email,
  };
  subscriptions.push(newSubscription);
  return newSubscription;
};

export const getSubscriptions = () => subscriptions;
