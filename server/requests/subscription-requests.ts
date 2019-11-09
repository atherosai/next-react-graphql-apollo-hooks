import genId from "../lib/gen-id"

const subscriptions = [
  {
    id: genId(),
    email: 'david@atheros.ai'
  }
];

export const createSubscription = async ({}, input: any) => {
  input.id = genId();
  subscriptions.push(input);
  return input;
};

export const getSubscriptions = () => subscriptions;

