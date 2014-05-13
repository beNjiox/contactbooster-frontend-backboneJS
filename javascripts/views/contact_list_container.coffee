define ['backbone', 'models/contact', 'views/contact_list', 'views/add_contact', 'text!views/partials/no_item_in_list.tpl'], (Backbone, Contact, ContactList, AddContact, noItemTpl) ->
  return Backbone.View.extend({
    initialize: ->
      console.log 'containerlist initialize'
      @newContact  = new Contact
      @contactList = new ContactList { collection: @collection }
      @addContact  = new AddContact  { collection: @collection, model: @newContact }
      @.listenTo @collection, 'remove', @.onRemove
      @.listenTo @collection, 'add', @.onAdd
    ,
    onRemove: ->
      console.log "ContactList container realized item has been removed"
      @.$el.find('.no-contact').fadeIn() if @collection.length == 0
    ,
    onAdd: ->
      console.log "ContactList container realized item has been added"
      @.$el.find('.no-contact').fadeOut() if @collection.length == 1
    ,
    render: ->
      @.$el.append noItemTpl
      @.$el.find('.no-contact').fadeIn() if @collection.length == 0
      @.$el.append @contactList.render().el
      @.$el.append @addContact.render().el
      @
  })