(function() {
  var Browser, assert, browser;

  assert = require('assert');

  Browser = require('zombie');

  browser = new Browser();

  describe('index page', function() {
    beforeEach(function(done) {
      browser.localStorage('localhost:8080').clear();
      return browser.visit('http://localhost:8080', function() {
        return done();
      });
    });
    it('The page should be empty', function() {
      assert.equal(browser.text('h1'), 'contactbooster/backbone');
      assert.equal(browser.queryAll(".contact_list .list-group-item").length, 0);
      return assert.equal(browser.text('.contact_list'), 'There is no contact in your list! Add one now.');
    });
    return it('should add a new contact', function() {
      return browser.pressButton(".toggle", function() {
        browser.fill('lastname', 'guez');
        browser.fill('firstname', 'ben');
        browser.fill('phone', '4242424242');
        return browser.pressButton('.save', function() {
          return assert.equal(browser.queryAll(".contact_list .list-group-item").length, 1);
        });
      });
    });
  });

}).call(this);
