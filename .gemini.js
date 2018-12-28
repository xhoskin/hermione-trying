module.exports = {
    rootUrl: 'http://td.aivanov.trade/app_dev.php',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'my/gemini-reports'
            }
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
