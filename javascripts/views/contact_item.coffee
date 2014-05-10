window.ContactItem = Backbone.View.extend({
  template: _.template('<%= name %> - <%= telephone %>'),

  initialize: ->

  render: ->
    @.$el.html(@template(@model.attributes))
    @
})