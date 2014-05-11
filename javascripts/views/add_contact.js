(function() {
  window.AddContact = Backbone.View.extend({
    initialize: function() {},
    template: $("#add-contact-tpl").html(),
    events: {
      'click button.save': 'saveContact',
      'click button.toggle': 'toggleAdd'
    },
    toggleAdd: function() {
      return this.$el.find('.add-contact-container').slideToggle('slow');
    },
    saveContact: function() {
      var contact;
      contact = new Contact(this.newContactAttributes());
      contact.save();
      this.collection.add(contact);
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
      this.$el.html(this.template);
      return this;
    }
  });

}).call(this);
