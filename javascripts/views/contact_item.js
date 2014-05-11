(function() {
  window.ContactItem = Backbone.View.extend({
    template: _.template($('#contact-item').html()),
    events: {
      'click .remove': 'removeItem',
      'click .edit': 'editItem',
      'click .item': 'editItem'
    },
    editItem: function() {
      return Backbone.history.navigate("/contact/" + this.model.id, {
        trigger: true
      });
    },
    removeItem: function() {
      if (confirm("Do you confirm that you want to delete " + (this.model.fullname()) + " from the list?")) {
        this.model.destroy();
        return this.$el.fadeOut();
      }
    },
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

}).call(this);
