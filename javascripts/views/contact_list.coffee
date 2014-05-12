define ['views/contact_item'], (ContactItem) ->
  return Backbone.View.extend({
    className: 'contact_list'
    ,
    initialize: ->
      window.collection = @collection
      @listenTo(@collection, 'add', @addOne)
      @listenTo(@collection, 'reset', @addAll)
      @listenTo(@collection, 'remove', @removeOne)
    ,
    removeOne: ->
      if @collection.length is 0
        @_display_no_contact()
    ,
    addAll: ->
      if @collection.length is 0
        @_display_no_contact()
      else
        @.$el.empty()
        @collection.forEach @addOne, @
    ,
    addOne: (contact) ->
      $(".no-contact").hide()
      contact = new ContactItem {model: contact, tagName: 'a', className: 'list-group-item'}
      @.$el.append contact.render().el
    ,
    render: ->
      @addAll()
      @
    ,
    _display_no_contact: ->
      @.$el.append('<div class="alert alert-info no-contact">There is no contact in your list! Add one now.</div>')
  })