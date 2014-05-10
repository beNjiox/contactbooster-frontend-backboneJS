window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index"
  }

  initialize: ->
    @contacts    = new Contacts [
      {name: "Benjamin", telephone: "0625717532"},
      {name: "Michael Jordan", telephone: "5554443322"},
      {name: "Scottie Pippen", telephone: "999955553333"},
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
