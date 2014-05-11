window.Contact = Backbone.Model.extend({
  localStorage: window.appLocalStorage || window.appLocalStorage = new Backbone.LocalStorage("contacts")
  ,
  defaults: {
    firstname: "",
    lastname: "",
    phone: ""
  }
  ,
  fullname: ->
    "#{@.get('firstname')} #{@.get('lastname')}"
})