import genId from '../lib/gen-id';
import { MutationSubscribeArgs, Subscription } from '../generated/resolver-types';

const subscriptions = [
  {
    id: genId(),
    email: 'david@atheros.ai',
  },
];

export const createSubscription = (_: object, args: MutationSubscribeArgs): Subscription => {
  const { input: { email } } = args;
  const newSubscription = {
    id: genId(),
    email,
  };
  subscriptions.push(newSubscription);
  return newSubscription;
};

export const getSubscriptions = () => subscriptions;
