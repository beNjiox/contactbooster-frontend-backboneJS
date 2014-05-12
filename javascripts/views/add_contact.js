(function() {
  define(['text!views/partials/add_contact.tpl'], function(addContactTpl) {
    return Backbone.View.extend({
      className: 'add_contact_container',
      template: _.template(addContactTpl),
      events: {
        'click .save': 'saveContact',
        'click button.toggle': 'toggleAdd'
      },
      toggleAdd: function() {
        return this.$el.find('.add-contact-container').slideToggle('slow');
      },
      saveContact: function(e) {
        var newContact;
        e.preventDefault();
        newContact = this.collection.create(this.newContactAttributes(), {
          wait: true
        });
        if (newContact.isValid()) {
          return this.closeForm();
        } else {
          $('.error-input').hide();
          return this.displayError(newContact.validationError);
        }
      },
      displayError: function(errors) {
        var error, field, _results;
        _results = [];
        for (field in errors) {
          error = errors[field];
          _results.push($(".error-" + field).html(error).fadeIn());
        }
        return _results;
      },
      newContactAttributes: function() {
        return {
          lastname: this.$el.find('input[name=lastname]').val(),
          firstname: this.$el.find('input[name=firstname]').val(),
          phone: this.$el.find('input[name=phone]').val()
        };
      },
      closeForm: function() {
        $('.error-input').fadeOut();
        this.$el.find('input[name=lastname]').val('');
        this.$el.find('input[name=firstname]').val('');
        return this.$el.find('input[name=phone]').val('');
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });
  });

}).call(this);
