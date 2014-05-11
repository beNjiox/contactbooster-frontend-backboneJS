(function() {
  window.AddContact = Backbone.View.extend({
    initialize: function() {},
    template: _.template($("#add-contact").html()),
    events: {
      submit: 'saveContact',
      'click button.toggle': 'toggleAdd'
    },
    toggleAdd: function() {
      return this.$el.find('.add-contact-container').slideToggle('slow');
    },
    saveContact: function(e) {
      e.preventDefault();
      this.collection.create(this.newContactAttributes());
      return this.closeForm();
    },
    newContactAttributes: function() {
      return {
        lastname: this.$el.find('input[name=lastname]').val(),
        firstname: this.$el.find('input[name=firstname]').val(),
        phone: this.$el.find('input[name=phone]').val()
      };
    },
    closeForm: function() {
      this.$el.find('input[name=lastname]').val('');
      this.$el.find('input[name=firstname]').val('');
      return this.$el.find('input[name=phone]').val('');
    },
    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

}).call(this);
