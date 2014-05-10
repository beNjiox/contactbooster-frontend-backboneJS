window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: ->
    @contact = new Contact({name: "Benjamin", telephone: "0625717532"})
    @contactItem = new ContactItem({model: @contact, el: '#app'})
    @contactItem.render()

  index: ->
    @contactItem.el

  start: ->
    Backbone.history.start()
}))

$(document).ready ->
  window.TodoApp.start()
  console.log "app started!"
