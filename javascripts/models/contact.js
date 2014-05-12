(function() {
  define(['backbone', 'backbone.localStorage'], function(Backbone) {
    var Contact;
    Contact = Backbone.Model.extend({
      localStorage: window.appLocalStorage || (window.appLocalStorage = new Backbone.LocalStorage("contacts")),
      defaults: {
        firstname: "",
        lastname: "",
        phone: ""
      },
      validate: function(attrs, options) {
        var errors;
        errors = {};
        if (!attrs.phone.match(/\d{5,10}/)) {
          errors.phone = "The phone number is invalid. (Only numbers)";
        }
        if (!attrs.lastname.match(/\w{3,25}/)) {
          errors.lastname = "The lastname should be only characters between 3 and 25";
        }
        if (!attrs.firstname.match(/\w{3,25}/)) {
          errors.firstname = "The firstname should be only characters between 3 and 25";
        }
        if (_.isEmpty(errors)) {
          return;
        }
        return errors;
      },
      fullname: function() {
        return "" + (this.get('firstname')) + " " + (this.get('lastname'));
      }
    });
    return Contact;
  });

}).call(this);
