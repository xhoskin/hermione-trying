var assert = require('chai').assert;

describe('locator', function() {
    beforeEach(function (done) {
        return this.browser
            .url('http://td.aivanov.trade/app_dev.php/buy-car/new-cars')
            .waitForVisible('#FilterSortLine', 15000)
    });
    it('Filter', function() {
        return this.browser
            .assertView('plain', '.filter-panel')
        ;
    });
    it('Filter sorting block', function() {
        return this.browser
            .assertView('plain', '.sorting')
        ;
    });
    it('Card of model', function() {
        return this.browser
            .assertView('plain', '.car-card')
        ;
    });
    it('Card of complectation', function() {
        return this.browser
            .click('.car-card')
            .waitForVisible('.car-card_view-list', 15000)
            .assertView('plain', '.car-card_view-list');
    });
    it('Card of complectation dropdown', function() {
        return this.browser
            .click('.car-card')
            .waitForVisible('.car-card_view-list', 15000)
            .click('.car-card_view-list')
            .waitForVisible('.complectation-grid__dropdown .car-card', 15000)
            .$('.complectation-grid__dropdown')
            .scroll(100, 100)
            .assertView('plain', '.complectation-grid__dropdown');
    });
    // it('Model card hover', function() {
    //     this.browser
    //         .$('.car-card')
    //         .touchAction(20, 20);
    //     return this.browser
    //         .assertView('hover', '.card-grid__col')
    //     ;
    // });
});

describe('service', function() {
    it('page 1', function() {
        return this.browser
            .url('http://td.aivanov.trade/service')
            .assertView('plain', '#_ServiceFormBlock')
    });
    it('page 2', function() {
        return this.browser
            .click('.dealer-card')
            .waitForVisible('.col-sm-6[ng-show="modelChoices.length"]', 15000)
            .assertView('plain', '#_ServiceFormBlock');
    });
});