(function() {
  window.TodoApp = new (Backbone.Router.extend({
    routes: {
      "": "index"
    },
    initialize: function() {
      this.contactItem = new ContactItem({
        name: "Benjamin",
        telephone: "0625717532"
      });
      this.contactView = new ContactView({
        model: this.contactItem,
        el: '#app'
      });
      return this.contactView.render();
    },
    index: function() {
      return this.contactView.el;
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
