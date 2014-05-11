(function() {
  window.Contacts = Backbone.Collection.extend({
    localStorage: window.appLocalStorage || (window.appLocalStorage = new Backbone.LocalStorage("contacts")),
    model: Contact
  });

}).call(this);
