(function() {
  define(['models/contact', 'collections/contacts', 'views/contact_list_container', 'views/contact_detail'], function(Contact, Contacts, ContactListContainer, ContactDetail) {
    return new (Backbone.Router.extend({
      routes: {
        "": "index",
        "contact/:id": 'editContact'
      },
      initialize: function() {
        return console.log("Initialize router");
      },
      index: function() {
        console.log("index route");
        this.contacts = new Contacts();
        this.contacts.fetch();
        this.contactListContainer = new ContactListContainer({
          collection: this.contacts
        });
        return $('#app').html(this.contactListContainer.render().el);
      },
      editContact: function(id) {
        var contact, contactDetail;
        console.log("editContact route");
        contact = new Contact({
          id: id
        });
        contact.fetch();
        contactDetail = new ContactDetail({
          model: contact
        });
        return $('#app').html(contactDetail.render().el);
      },
      start: function() {
        return Backbone.history.start({
          pushState: false
        });
      }
    }));
  });

}).call(this);
