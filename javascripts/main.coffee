window.AppRoot = new (Backbone.Router.extend({
  routes: {
    "": "index"
  }

  initialize: ->
    @app = new ContactApp {el: '#app'}

  index: ->
    @app.render()

  start: ->
    Backbone.history.start()
}))

$(document).ready ->
  window.AppRoot.start()
