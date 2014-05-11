window.ContactItem = Backbone.View.extend({
  template: _.template('<strong> <%= lastname %> </strong> <%= firstname %> <div class="pull-right"><%= telephone %></div>'),

  initialize: ->

  render: ->
    @.$el.html(@template(@model.attributes))
    @
})