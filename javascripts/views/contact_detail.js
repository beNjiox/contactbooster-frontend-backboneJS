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
        e.preventDefault();
        this.model.save(this.editContactAttributes());
        return Backbone.history.navigate("", {
          trigger: true
        });
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
