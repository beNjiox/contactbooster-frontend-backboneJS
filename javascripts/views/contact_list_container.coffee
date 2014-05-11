window.ContactListContainer = Backbone.View.extend({
  initialize: ->
    @contacts    = new Contacts
    @newContact  = new Contact
    @contactList = new ContactList { collection: @contacts }
    @addContact  = new AddContact  { collection: @contacts }
    @contacts.fetch()
  ,
  render: ->
    @.$el.html(@contactList.render().el)
    @.$el.append(@addContact.render().el)
    @
})