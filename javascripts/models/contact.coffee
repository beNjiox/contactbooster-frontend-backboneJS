define(['backbone', 'backbone.localStorage'], (Backbone) ->
  Contact = Backbone.Model.extend({
    localStorage: window.appLocalStorage || window.appLocalStorage = new Backbone.LocalStorage("contacts")
    ,
    defaults: { firstname: "", lastname: "", phone: "" }
    ,
    validate: (attrs, options) ->
      errors = {}
      unless attrs.phone.match /\d{5,10}/
        errors.phone = "The phone number is invalid. (Only numbers)"
      unless attrs.lastname.match /\w{3,25}/
        errors.lastname = "The lastname should be only characters between 3 and 25"
      unless attrs.firstname.match /\w{3,25}/
        errors.firstname = "The firstname should be only characters between 3 and 25"
      return if _.isEmpty errors
      errors
    ,
    fullname: ->
      "#{@.get('firstname')} #{@.get('lastname')}"
  })

  return Contact
)
