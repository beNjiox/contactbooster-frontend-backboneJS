assert  = require 'assert'
Browser = require 'zombie'

browser = new Browser()
browser.visit 'http://localhost:8080', ->
  assert.equal browser.text('h1'), 'contactbooster/backbone'
  assert.equal browser.queryAll("#app").length, 1
  assert.equal browser.queryAll(".contact_list .list-group-item").length, 0
