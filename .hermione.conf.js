module.exports = {
    sets: {
        desktop: {
            files: 'tests/desktop'
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            compositeImage: true,
            windowSize: {
                width: 1440,
                height: 1600
            },
            screenshotDelay: 1600
        }
    },
    
    plugins: {
        'html-reporter/hermione': {
            // path: 'tests/hermione/html-report',
            enabled: true,
            path: '',
            defaultView: 'all',
            baseHost: 'test.com'
        },
    }
};