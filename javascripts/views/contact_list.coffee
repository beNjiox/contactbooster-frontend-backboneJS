define ['views/contact_item'], (ContactItem) ->
  return Backbone.View.extend({
    className: 'contact_list'
    ,
    initialize: ->
      window.collection = @collection
      @collection.on 'add', @addOne, @
      @collection.on 'reset', @addAll, @
    ,
    addAll: ->
      console.log "addAll"
      @.$el.empty()
      @collection.forEach @addOne, @
    ,
    addOne: (contact) ->
      console.log "AddOne"
      contact = new ContactItem {model: contact, tagName: 'a', className: 'list-group-item'}
      @.$el.append contact.render().el
    ,
    render: ->
      @addAll()
      @
  })