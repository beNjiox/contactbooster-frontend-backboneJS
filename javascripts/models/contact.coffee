window.Contact = Backbone.Model.extend({
  localStorage: window.appLocalStorage || window.appLocalStorage = new Backbone.LocalStorage("contacts")
})