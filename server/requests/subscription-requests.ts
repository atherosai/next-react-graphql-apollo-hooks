import genId from '../lib/gen-id';
import { MutationSubscribeArgs, Subscription } from '../generated/resolver-types';

const subscriptions = [
  {
    id: genId(),
    email: 'david@atheros.ai',
    source: 'ARTICLE', // can be enhanced by storing integer mapping
  },
];

export const createSubscription = (_: object, args: MutationSubscribeArgs): Subscription => {
  const { input: { email, source } } = args;
  const newSubscription = {
    id: genId(),
    email,
    source,
  };
  subscriptions.push(newSubscription);
  return newSubscription;
};

export const getSubscriptions = () => subscriptions;
