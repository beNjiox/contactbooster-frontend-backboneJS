window.ContactListContainer = Backbone.View.extend({
  initialize: ->
    @newContact  = new Contact
    @contactList = new ContactList { collection: @collection }
    @addContact  = new AddContact  { collection: @collection, model: @newContact }
  ,
  render: ->
    @.$el.append @contactList.render().el
    @.$el.append @addContact.render().el
    @
})