window.ContactApp = Backbone.View.extend({
  initialize: ->
    @contactListContainer = new ContactListContainer
  ,
  render: ->
    @.$el.html(@contactListContainer.render().el)
})