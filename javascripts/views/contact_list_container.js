(function() {
  define(['backbone', 'models/contact', 'views/contact_list', 'views/add_contact', 'text!views/partials/no_item_in_list.tpl'], function(Backbone, Contact, ContactList, AddContact, noItemTpl) {
    return Backbone.View.extend({
      initialize: function() {
        console.log('containerlist initialize');
        this.newContact = new Contact;
        this.contactList = new ContactList({
          collection: this.collection
        });
        this.addContact = new AddContact({
          collection: this.collection,
          model: this.newContact
        });
        this.listenTo(this.collection, 'remove', this.onRemove);
        return this.listenTo(this.collection, 'add', this.onAdd);
      },
      onRemove: function() {
        console.log("ContactList container realized item has been removed");
        if (this.collection.length === 0) {
          return this.$el.find('.no-contact').fadeIn();
        }
      },
      onAdd: function() {
        console.log("ContactList container realized item has been added");
        if (this.collection.length === 1) {
          return this.$el.find('.no-contact').fadeOut();
        }
      },
      render: function() {
        this.$el.append(noItemTpl);
        if (this.collection.length === 0) {
          this.$el.find('.no-contact').fadeIn();
        }
        this.$el.append(this.contactList.render().el);
        this.$el.append(this.addContact.render().el);
        return this;
      }
    });
  });

}).call(this);
