(function() {
  window.ContactListContainer = Backbone.View.extend({
    initialize: function() {
      this.contacts = new Contacts;
      this.contacts.fetch();
      this.contactList = new ContactList({
        collection: this.contacts
      });
      return this.addContact = new AddContact;
    }
  });

}).call(this);
