(function() {
  window.ContactItem = Backbone.View.extend({
    template: _.template('<%= name %> - <%= telephone %>'),
    initialize: function() {},
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

}).call(this);
