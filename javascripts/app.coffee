define ['models/contact', 'collections/contacts', 'views/contact_list_container', 'views/contact_detail'], (Contact, Contacts, ContactListContainer, ContactDetail) ->
  new (Backbone.Router.extend({
    routes: {
      "": "index"
      "contact/:id": 'editContact'
    }
    ,
    initialize: ->
      console.log "Initialize router"
    ,
    index: ->
      console.log "index route"
      @contacts             = new Contacts()
      @contacts.fetch()
      @contactListContainer = new ContactListContainer({collection:@contacts})
      $('#app').html(@contactListContainer.render().el)
    ,
    editContact: (id) ->
      console.log "editContact route"
      contact       = new Contact({id: id})
      contact.fetch()
      contactDetail = new ContactDetail({model: contact})
      $('#app').html(contactDetail.render().el)
    ,
    start: ->
      Backbone.history.start({pushState: false})
  }))
