module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'node_modules/chai/chai.js',
            'node_modules/sinon-chai/lib/sinon-chai.js',
            'node_modules/sinon/pkg/sinon.js',
            'src/main/js/calculator.js',
            'src/test/js/calculator-test.js'
        ],
        preprocessors: {
            'src/test/js/fixtures/*.html': ['html2js'],
            'src/main/js/*.js': ['coverage']
        },

        reporters: ['progress', 'coverage'],

        port: 9877,
        colors: true,
        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,
        logLevel: config.LOG_INFO,

        coverageReporter: {
            dir: 'target/test_js_coverage',
            instrumenter: {
                'js/*.js': ['istanbul']
            },
            reporters: [
                { type: 'html', subdir: 'report-html' }
            ]
        }
    });
};