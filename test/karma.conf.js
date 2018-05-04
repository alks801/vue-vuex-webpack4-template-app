var webpackConfig = require('../build/webpack.config.dev.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      '**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    browsers: ['Chrome']
  })
}