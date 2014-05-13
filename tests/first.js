var Browser = require('zombie');
var assert  = require('assert');

browser = new Browser();
browser.visit('http://localhost:8080/', function(){
  assert.equal(browser.text('h1'), 'contactbooster/backbone');
  assert.equal(browser.queryAll("#app").length, 1);
  assert.equal(browser.queryAll(".contact_list .list-group-item").length, 0);
  browser.pressButton(".toggle", function() {
    browser.fill('lastname', 'guez');
    browser.fill('firstname', 'ben');
    browser.fill('phone', '4242424242');
    browser.pressButton('.save', function() {
      assert.equal(browser.queryAll(".contact_list .list-group-item").length, 1);
    });
  });
});

