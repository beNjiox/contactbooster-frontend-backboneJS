(function() {
  window.TodoApp = new (Backbone.Router.extend({
    routes: {
      "": "index"
    },
    initialize: function() {
      this.contact = new Contact({
        name: "Benjamin",
        telephone: "0625717532"
      });
      this.contactItem = new ContactItem({
        model: this.contact,
        el: '#app'
      });
      return this.contactItem.render();
    },
    index: function() {
      return this.contactItem.el;
    },
    start: function() {
      return Backbone.history.start();
    }
  }));

  $(document).ready(function() {
    window.TodoApp.start();
    return console.log("app started!");
  });

}).call(this);
