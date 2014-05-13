(function() {
  define(['views/contact_item'], function(ContactItem) {
    return Backbone.View.extend({
      className: 'contact_list',
      initialize: function() {
        window.collection = this.collection;
        this.collection.on('add', this.addOne, this);
        return this.collection.on('reset', this.addAll, this);
      },
      addAll: function() {
        console.log("addAll");
        this.$el.empty();
        return this.collection.forEach(this.addOne, this);
      },
      addOne: function(contact) {
        console.log("AddOne");
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
      }
    });
  });

}).call(this);
