exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },
    chromeDriver: '../node_modules/chromedriver/lib/chromedriver/chromedriver',
    seleniumServerJar: '../node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.40.0.jar',


    baseUrl: 'http://localhost:5000/#/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};