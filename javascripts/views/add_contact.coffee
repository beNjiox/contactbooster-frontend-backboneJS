define ['text!views/partials/add_contact.tpl'], (addContactTpl) ->
  return Backbone.View.extend({
    className: 'add_contact_container'
    ,
    template: _.template(addContactTpl)
    ,
    events: {
      'click .save' : 'saveContact'
      'click button.toggle': 'toggleAdd'
    }
    ,
    toggleAdd: ->
      @.$el.find('.add-contact-container').slideToggle 'slow'
    ,
    saveContact: (e) ->
      e.preventDefault()
      newContact = @collection.create @newContactAttributes(), { wait: true }
      if newContact.isValid()
        @closeForm()
      else
        $('.error-input').hide()
        @displayError(newContact.validationError)
    ,
    displayError: (errors) ->
      for field, error of errors
        $(".error-#{field}").html(error).fadeIn()
    ,
    newContactAttributes: ->
      {
        lastname: @.$el.find('input[name=lastname]').val()
        firstname: @.$el.find('input[name=firstname]').val()
        phone: @.$el.find('input[name=phone]').val()
      }
    ,
    closeForm: ->
      $('.error-input').fadeOut()
      @.$el.find('input[name=lastname]').val('')
      @.$el.find('input[name=firstname]').val('')
      @.$el.find('input[name=phone]').val('')
    ,
    render: ->
      @.$el.html(@template(@model.attributes))
      @

  })