exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['fs_login.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
