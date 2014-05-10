window.TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: ->
    console.log "initialize"

  index: ->
    console.log "index route"

  start: ->
    Backbone.history.start()
}))

window.TodoApp.start()