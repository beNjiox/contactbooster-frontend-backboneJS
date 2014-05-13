define ['text!views/partials/contact_item.tpl'], (contactItemTpl) ->
  return Backbone.View.extend({
    initialize: ->
      @.listenTo @model, 'destroy', @.onDestroy
    ,
    onDestroy: ->
      console.log "View for an item detected itself to be destroyed"
      @.$el.fadeOut('fast')
    ,
    template: _.template(contactItemTpl)
    ,
    events: {
      'click .remove': 'removeItem'
      'click .edit': 'editItem'
      'dblclick': 'editItem'
    }
    ,
    editItem: ->
      Backbone.history.navigate("/contact/#{@model.id}", {trigger: true})
    ,
    removeItem: ->
      if (confirm("Do you confirm that you want to delete #{@.model.fullname()} from the list?"))
        @.model.destroy()
    ,
    render: ->
      @.$el.html(@template(@model.attributes))
      @
  })