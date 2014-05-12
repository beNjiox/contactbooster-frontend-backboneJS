define(['backbone', 'models/contact', 'backbone.localStorage'], (Backbone, Contact) ->
  Contacts = Backbone.Collection.extend({
    localStorage: window.appLocalStorage || window.appLocalStorage = new Backbone.LocalStorage("contacts")
    model: Contact
  })
)

