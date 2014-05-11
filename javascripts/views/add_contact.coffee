window.AddContact = Backbone.View.extend({
  initialize: ->
  ,
  template: _.template($("#add-contact").html())
  ,
  events: {
    'click button.save': 'saveContact'
    'click button.toggle': 'toggleAdd'
  }
  ,
  toggleAdd: ->
    @.$el.find('.add-contact-container').slideToggle 'slow'
  ,
  saveContact: (e) ->
    e.preventDefault()
    @collection.create @newContactAttributes()
    @closeForm()
  ,
  newContactAttributes: ->
    {
      lastname: @.$el.find('input[name=lastname]').val()
      firstname: @.$el.find('input[name=firstname]').val()
      phone: @.$el.find('input[name=phone]').val()
    }
  ,
  closeForm: ->
    @.$el.find('input[name=lastname]').val('')
    @.$el.find('input[name=firstname]').val('')
    @.$el.find('input[name=phone]').val('')
  ,
  render: ->
    @.$el.html(@template(@model.attributes))
    @

})