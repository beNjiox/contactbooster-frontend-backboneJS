define ['text!views/partials/contact_detail.tpl'], (contactDetailTpl) ->
  return Backbone.View.extend({
    template: _.template(contactDetailTpl)
    ,
    events: {
      'submit': 'submit'
      'click .back': 'back',
      'click .remove': 'remove'
    }
    ,
    remove: ->
      if confirm "Are you sure you want to remove this account?"
        @model.destroy()
        @back()
    ,
    back: ->
      Backbone.history.navigate("", {trigger: true})
    ,
    submit: (e) ->
      e.preventDefault()
      @model.save(@editContactAttributes())
      Backbone.history.navigate("", {trigger: true})
    ,
    editContactAttributes: ->
      {
        lastname: @.$el.find('input[name=lastname]').val()
        firstname: @.$el.find('input[name=firstname]').val()
        phone: @.$el.find('input[name=phone]').val()
      }
    ,
    render: ->
      @.$el.html(@template(@model.attributes))
      @
  })