(function() {
  window.ContactItem = Backbone.View.extend({
    template: _.template('<strong> <%= lastname %> </strong> <%= firstname %> <div class="pull-right"><%= telephone %></div>'),
    initialize: function() {},
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

}).call(this);
