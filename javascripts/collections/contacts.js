(function() {
  define(['backbone', 'models/contact', 'backbone.localStorage'], function(Backbone, Contact) {
    var Contacts;
    return Contacts = Backbone.Collection.extend({
      localStorage: window.appLocalStorage || (window.appLocalStorage = new Backbone.LocalStorage("contacts")),
      model: Contact
    });
  });

}).call(this);
