const path = require('path');

module.exports = {
  verbose: true,
  // moduleFileExtensions: ['**/*.integration.js'],
  testRegex: 'integration.test',
  globalSetup: path.join(__dirname, './global-setup.js'),
  globalTeardown: path.join(__dirname, './global-teardown.js'),
  testEnvironment: 'node'
};
