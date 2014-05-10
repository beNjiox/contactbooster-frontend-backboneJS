window.ContactItem = Backbone.View.extend({
  template: _.template('<li><%= name %> - <%= telephone %></li>'),

  initialize: ->
    console.log "initialize ContactView"

  render: ->
    @.$el.html(@template(@model.attributes))
})