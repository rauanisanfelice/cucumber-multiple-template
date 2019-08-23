var {defineSupportCode} = require('cucumber');

defineSupportCode(function(context) {

    require('chromedriver')
    var driver = require('selenium-webdriver');

    context.setDefaultTimeout(200 * 1000)

    var setWorldConstructor = context.setWorldConstructor;
    var Given = context.Given
    var When = context.When
    var Then = context.Then

    var expect=require('chai').expect

    var by = driver.By;
    var key = driver.Key;
    var until = driver.until;

    var browser = new driver.Builder()
        .forBrowser('chrome')
        .build();
    
    Given(/^Open the page$/, function () {
        return browser.get('https://google.com.br');
    });

    When(/^Search "([^"]*)"$/, function (text) {
        return browser.get('https://google.com.br/').then(
            browser.wait(until.elementLocated(by.name('q'))).sendKeys(text), false).then(
                browser.wait(until.elementLocated(by.name('btnK'))).click(), false);
    });

    Then(/^Close the page$/, function () {
        return browser.quit();
    });

})