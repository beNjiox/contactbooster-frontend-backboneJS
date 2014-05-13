assert  = require 'assert'
Browser = require 'zombie'

browser = new Browser()
describe 'index page', ->
  beforeEach (done) ->
    browser.localStorage('localhost:8080').clear()
    browser.visit 'http://localhost:8080', ->
      done()

  it 'The page should be empty', ->
    assert.equal browser.text('h1'), 'contactbooster/backbone'
    assert.equal browser.queryAll(".contact_list .list-group-item").length, 0
    assert.equal browser.text('.contact_list'), 'There is no contact in your list! Add one now.'
  it 'should add a new contact', ->
    browser.pressButton ".toggle", ->
      browser.fill 'lastname', 'guez'
      browser.fill 'firstname', 'ben'
      browser.fill 'phone', '4242424242'
      browser.pressButton '.save', ->
        assert.equal browser.queryAll(".contact_list .list-group-item").length, 1
