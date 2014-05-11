window.AppRoot = new (Backbone.Router.extend({
  routes: {
    "": "index"
    "contact/:id": 'editContact'
  }
  ,
  initialize: ->
    @contacts             = new Contacts
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
    console.log contact
    $('#app').html(contactDetail.render().el)
  ,
  start: ->
    Backbone.history.start({pushState: false})
}))

$(document).ready ->
  window.AppRoot.start()
