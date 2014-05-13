(function() {
  define(['text!views/partials/contact_detail.tpl'], function(contactDetailTpl) {
    return Backbone.View.extend({
      template: _.template(contactDetailTpl),
      events: {
        'submit': 'submit',
        'click .back': 'back',
        'click .remove': 'remove'
      },
      remove: function() {
        if (confirm("Are you sure you want to remove this account?")) {
          this.model.destroy();
          return this.back();
        }
      },
      back: function() {
        return Backbone.history.navigate("", {
          trigger: true
        });
      },
      submit: function(e) {
        var error, field, _ref, _results;
        e.preventDefault();
        $('.error-input').hide();
        this.model.set(this.editContactAttributes());
        if (this.model.isValid()) {
          this.model.save();
          return Backbone.history.navigate("", {
            trigger: true
          });
        } else {
          _ref = this.model.validationError;
          _results = [];
          for (field in _ref) {
            error = _ref[field];
            _results.push($(".error-" + field).html(error).fadeIn());
          }
          return _results;
        }
      },
      editContactAttributes: function() {
        return {
          lastname: this.$el.find('input[name=lastname]').val(),
          firstname: this.$el.find('input[name=firstname]').val(),
          phone: this.$el.find('input[name=phone]').val()
        };
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });
  });

}).call(this);
