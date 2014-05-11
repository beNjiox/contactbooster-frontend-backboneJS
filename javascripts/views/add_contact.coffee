window.AddContact = Backbone.View.extend({
  initialize: ->
  ,
  template: $("#add-contact-tpl").html()
  ,
  events: {
    'click button.save': 'saveContact'
    'click button.toggle': 'toggleAdd'
  }
  ,
  toggleAdd: ->
    @.$el.find('.add-contact-container').slideToggle 'slow'
  ,
  saveContact: ->
    contact = new Contact(@newContactAttributes())
    contact.save()
    @collection.add contact
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
  render: ->
    @.$el.html(@template)
    @

})