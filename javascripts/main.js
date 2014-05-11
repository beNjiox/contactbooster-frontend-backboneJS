(function() {
  window.TodoApp = new (Backbone.Router.extend({
    routes: {
      "": "index"
    },
    initialize: function() {
      this.contacts = new Contacts([
        {
          lastname: 'Guez',
          firstname: "Benjamin",
          telephone: "0625717532"
        }, {
          lastname: 'Jordan',
          firstname: "Michael",
          telephone: "5554443322"
        }, {
          lastname: 'Pippen',
          firstname: "Scottie",
          telephone: "999955553333"
        }
      ]);
      return this.contactList = new ContactList({
        collection: this.contacts,
        el: '.contact_list'
      });
    },
    index: function() {
      return this.contactList.render();
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
