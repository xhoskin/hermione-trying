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
            compositeImage: true
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