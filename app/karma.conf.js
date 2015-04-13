'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : false,

    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'app'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'app'
    },


    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-ng-html2js-preprocessor',
      'karma-ng-jade2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/*.jade': ['ng-jade2js'],
      '.tmp/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'text',
      dir: '.tmp/coverage'
    }

  };

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
