(function() {
  window.ContactItem = Backbone.View.extend({
    template: _.template('<li><%= name %> - <%= telephone %></li>'),
    initialize: function() {
      return console.log("initialize ContactView");
    },
    render: function() {
      return this.$el.html(this.template(this.model.attributes));
    }
  });

}).call(this);
