define ['models/contact', 'collections/contacts', 'views/contact_list_container', 'views/contact_detail'], (Contact, Contacts, ContactListContainer, ContactDetail) ->
  AppRoot = Backbone.Router.extend({
    routes: {
      "": "index"
      "contact/:id": 'editContact'
    }
    ,
    initialize: ->
      @contacts             = new Contacts()
      @contactListContainer = new ContactListContainer({collection:@contacts})
    ,
    index: ->
      @contacts.fetch()
      $('#app').html(@contactListContainer.render().el)
    ,
    editContact: (id) ->
      contact       = new Contact({id: id})
      contact.fetch()
      contactDetail = new ContactDetail({model: contact})
      $('#app').html(contactDetail.render().el)
    ,
    start: ->
      Backbone.history.start({pushState: false})
  })
  return new AppRoot