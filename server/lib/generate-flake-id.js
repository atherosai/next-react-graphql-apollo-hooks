const FlakeId = require('flake-idgen');
const intformat = require('biguint-format');

const flakeIdGen = new FlakeId({ data_center: 1, worker: process.pid, epoch: 1300000000 });

const genId = () => {
  // configure as needed in distributed system
  return intformat(flakeIdGen.next(), 'dec');
};

module.exports = genId;
