window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index"
  }

  initialize: ->
    @contacts    = new Contacts [
      {lastname: 'Guez', firstname: "Benjamin", telephone: "0625717532"},
      {lastname: 'Jordan', firstname: "Michael", telephone: "5554443322"},
      {lastname: 'Pippen', firstname: "Scottie", telephone: "999955553333"},
    ]
    @contactList = new ContactList({collection: @contacts, el: '.contact_list'})

  index: ->
    @contactList.render()

  start: ->
    Backbone.history.start()
}))

$(document).ready ->
  window.TodoApp.start()
  console.log "app started!"
