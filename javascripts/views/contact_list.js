(function() {
  window.ContactList = Backbone.View.extend({
    className: 'contact_list',
    initialize: function() {
      window.collection = this.collection;
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);
      return this.listenTo(this.collection, 'remove', this.removeOne);
    },
    removeOne: function() {
      if (this.collection.length === 0) {
        return this._display_no_contact();
      }
    },
    addAll: function() {
      if (this.collection.length === 0) {
        return this._display_no_contact();
      } else {
        this.$el.empty();
        return this.collection.forEach(this.addOne, this);
      }
    },
    addOne: function(contact) {
      $(".no-contact").hide();
      contact = new ContactItem({
        model: contact,
        tagName: 'a',
        className: 'list-group-item'
      });
      return this.$el.append(contact.render().el);
    },
    render: function() {
      this.addAll();
      return this;
    },
    _display_no_contact: function() {
      return this.$el.append('<div class="alert alert-info no-contact">There is no contact in your list! Add one now.</div>');
    }
  });

}).call(this);
