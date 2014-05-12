(function() {
  define(['models/contact', 'collections/contacts', 'views/contact_list_container', 'views/contact_detail'], function(Contact, Contacts, ContactListContainer, ContactDetail) {
    var AppRoot;
    AppRoot = Backbone.Router.extend({
      routes: {
        "": "index",
        "contact/:id": 'editContact'
      },
      initialize: function() {
        this.contacts = new Contacts();
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
        return $('#app').html(contactDetail.render().el);
      },
      start: function() {
        return Backbone.history.start({
          pushState: false
        });
      }
    });
    return new AppRoot;
  });

}).call(this);
