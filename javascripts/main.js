(function() {
  window.TodoApp = new (Backbone.Router.extend({
    routes: {
      "": "index"
    },
    initialize: function() {
      return console.log("initialize");
    },
    index: function() {
      return console.log("index route");
    },
    start: function() {
      return Backbone.history.start();
    }
  }));

  window.TodoApp.start();

}).call(this);
