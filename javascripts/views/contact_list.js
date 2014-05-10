(function() {
  window.ContactList = Backbone.View.extend({
    initialize: function() {
      this.collection.on('add', this.addOne, this);
      return this.collection.on('reset', this.addAll, this);
    },
    addAll: function() {
      this.$el.empty();
      return this.collection.forEach(this.addOne, this);
    },
    addOne: function(contact) {
      contact = new ContactItem({
        model: contact,
        tagName: 'li'
      });
      return this.$el.append(contact.render().el);
    },
    render: function() {
      this.addAll();
      return this;
    }
  });

}).call(this);
