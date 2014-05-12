define ['models/contact', 'views/contact_list', 'views/add_contact'], (Contact, ContactList, AddContact) ->
  return Backbone.View.extend({
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