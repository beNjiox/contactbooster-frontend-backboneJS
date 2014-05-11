(function() {
  window.AppRoot = new (Backbone.Router.extend({
    routes: {
      "": "index"
    },
    initialize: function() {
      return this.app = new ContactApp({
        el: '#app'
      });
    },
    index: function() {
      return this.app.render();
    },
    start: function() {
      return Backbone.history.start();
    }
  }));

  $(document).ready(function() {
    return window.AppRoot.start();
  });

}).call(this);
