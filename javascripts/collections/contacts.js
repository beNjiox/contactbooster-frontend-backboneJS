(function() {
  window.Contacts = Backbone.Collection.extend({
    model: Contact,
    initialize: function() {
      return console.log("initialize Contacts collection");
    }
  });

}).call(this);
