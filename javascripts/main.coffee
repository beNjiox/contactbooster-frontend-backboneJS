window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: ->
    @contactItem = new ContactItem({name: "Benjamin", telephone: "0625717532"})
    @contactView = new ContactView({model: @contactItem, el: '#app'})
    @contactView.render()

  index: ->
    @contactView.el

  start: ->
    Backbone.history.start()
}))

$(document).ready ->
  window.TodoApp.start()
  console.log "app started!"
