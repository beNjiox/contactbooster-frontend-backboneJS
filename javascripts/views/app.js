(function() {
  window.ContactApp = Backbone.View.extend({
    initialize: function() {
      return this.contactListContainer = new ContactListContainer;
    },
    render: function() {
      return this.$el.html(this.contactListContainer.render().el);
    }
  });

}).call(this);
