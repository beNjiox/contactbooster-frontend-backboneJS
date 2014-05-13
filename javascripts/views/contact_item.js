(function() {
  define(['text!views/partials/contact_item.tpl'], function(contactItemTpl) {
    return Backbone.View.extend({
      initialize: function() {
        return this.listenTo(this.model, 'destroy', this.onDestroy);
      },
      onDestroy: function() {
        console.log("View for an item detected itself to be destroyed");
        return this.$el.fadeOut('fast');
      },
      template: _.template(contactItemTpl),
      events: {
        'click .remove': 'removeItem',
        'click .edit': 'editItem',
        'dblclick': 'editItem'
      },
      editItem: function() {
        return Backbone.history.navigate("/contact/" + this.model.id, {
          trigger: true
        });
      },
      removeItem: function() {
        if (confirm("Do you confirm that you want to delete " + (this.model.fullname()) + " from the list?")) {
          return this.model.destroy();
        }
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });
  });

}).call(this);
