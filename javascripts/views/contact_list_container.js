(function() {
  window.ContactListContainer = Backbone.View.extend({
    initialize: function() {
      this.contacts = new Contacts;
      this.newContact = new Contact;
      this.contactList = new ContactList({
        collection: this.contacts
      });
      this.addContact = new AddContact({
        collection: this.contacts
      });
      return this.contacts.fetch();
    },
    render: function() {
      this.$el.html(this.contactList.render().el);
      this.$el.append(this.addContact.render().el);
      return this;
    }
  });

}).call(this);
