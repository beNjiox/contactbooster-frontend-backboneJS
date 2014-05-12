define ['text!views/partials/contact_item.tpl'], (contactItemTpl) ->
  return Backbone.View.extend({
    template: _.template(contactItemTpl)
    ,
    events: {
      'click .remove': 'removeItem'
      'click .edit': 'editItem'
      'click .item': 'editItem'
    }
    ,
    editItem: ->
      Backbone.history.navigate("/contact/#{@model.id}", {trigger: true})
    ,
    removeItem: ->
      if (confirm("Do you confirm that you want to delete #{@.model.fullname()} from the list?"))
        @.model.destroy()
        @.$el.fadeOut()
    ,
    render: ->
      @.$el.html(@template(@model.attributes))
      @
  })