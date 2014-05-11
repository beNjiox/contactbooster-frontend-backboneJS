(function() {
  window.ContactListContainer = Backbone.View.extend({
    initialize: function() {
      this.newContact = new Contact;
      this.contactList = new ContactList({
        collection: this.collection
      });
      return this.addContact = new AddContact({
        collection: this.collection,
        model: this.newContact
      });
    },
    render: function() {
      this.$el.append(this.contactList.render().el);
      this.$el.append(this.addContact.render().el);
      return this;
    }
  });

}).call(this);
