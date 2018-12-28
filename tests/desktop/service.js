var assert = require('chai').assert;

describe('td', function() {
    it('page 1 should be ok', function() {
        return this.browser
            .url('http://td.aivanov.trade/service')
            .assertView('plain', '#_ServiceFormBlock')
    });
    it('page 2 should be ok', function() {
        return this.browser
            .click('.dealer-card')
            .waitForVisible('.col-sm-6[ng-show="modelChoices.length"]', 15000)
            .assertView('plain', '#_ServiceFormBlock');
    });
});