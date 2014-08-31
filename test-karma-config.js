// karma config
module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use: mocha / jasmine
    frameworks: ['mocha'],

    preprocessors: {
      './src/**/*.js': ['coverage']
    },

    // list of files / patterns to load in the browser
    files: [
      './bower_components/angular/angular.min.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './node_modules/expect.js/index.js',
      './src/**/*.js',
      './test/spec/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use: 
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['mocha', 'junit', 'coverage'],

    // the default configuration
    junitReporter: {
      outputFile: 'test/results/unit-test.xml'
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'test/results/coverage/'
    },

    // web server port
    port: 9870,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //      '/api': 'http://127.0.0.1:1337/api'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
