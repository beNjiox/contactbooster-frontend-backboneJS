window.ContactList = Backbone.View.extend({
  initialize: ->
    @collection.on 'add', @addOne, @
    @collection.on 'reset', @addAll, @

  addAll: ->
    @.$el.empty()
    @collection.forEach @addOne, @

  addOne: (contact) ->
    contact = new ContactItem {model: contact, tagName: 'li'}
    @.$el.append contact.render().el

  render: ->
    @addAll()
    @
})