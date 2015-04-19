// Tests for the calculator.
exports.config = {
  
  directConnet: false,
  seleniumAddress : "http://localhost:4444/wd/hub",
  specs: [
    '../spec_withPage.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
