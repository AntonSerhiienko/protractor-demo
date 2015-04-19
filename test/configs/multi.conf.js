// Tests for the calculator.
exports.config = {
  
  directConnet: true,
  specs: [
    '../spec_withPage.js'
  ],

  suites: {
        alltests: ['../*.js']
    },

  multiCapabilities:[
  	{'browserName': 'chrome'},
  	{'browserName': 'firefox'}
  ]
  
}
