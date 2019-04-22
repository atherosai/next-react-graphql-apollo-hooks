const genId = require('../lib/generate-flake-id');

const subscriptions = [
  {
    id: genId(),
    email: 'david@atheros.ai'
  }
];

const createSubscription = async (conf, input) => {
  input.id = genId();
  subscriptions.push(input);
  return input;
};

const getSubscriptions = () => subscriptions;

module.exports = {
  createSubscription,
  getSubscriptions
};
