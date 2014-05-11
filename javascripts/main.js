(function() {
  window.AppRoot = new (Backbone.Router.extend({
    routes: {
      "": "index",
      "contact/:id": 'editContact'
    },
    initialize: function() {
      this.contacts = new Contacts;
      return this.contactListContainer = new ContactListContainer({
        collection: this.contacts
      });
    },
    index: function() {
      this.contacts.fetch();
      return $('#app').html(this.contactListContainer.render().el);
    },
    editContact: function(id) {
      var contact, contactDetail;
      contact = new Contact({
        id: id
      });
      contact.fetch();
      contactDetail = new ContactDetail({
        model: contact
      });
      console.log(contact);
      return $('#app').html(contactDetail.render().el);
    },
    start: function() {
      return Backbone.history.start({
        pushState: false
      });
    }
  }));

  $(document).ready(function() {
    return window.AppRoot.start();
  });

}).call(this);
