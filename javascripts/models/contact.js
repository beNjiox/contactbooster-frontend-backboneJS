(function() {
  window.Contact = Backbone.Model.extend({
    localStorage: window.appLocalStorage || (window.appLocalStorage = new Backbone.LocalStorage("contacts")),
    defaults: {
      firstname: "",
      lastname: "",
      phone: ""
    },
    fullname: function() {
      return "" + (this.get('firstname')) + " " + (this.get('lastname'));
    }
  });

}).call(this);
