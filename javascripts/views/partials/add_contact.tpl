<button type="button" class="btn btn-sm btn-block btn-primary toggle">
  <i class="fa fa-plus"></i> <span>Add contact</span>
</button>

<form class="add-contact-container"  style='margin-top:10px;display:none'>
    <div class="row">
      <div class="col-xs-4">
        <input class='form-control' type="text" name='firstname' placeholder='firstname' value='<%= firstname %>' />
        <div class='error-input error-firstname'></div>
      </div>
      <div class="col-xs-4">
        <input class='form-control' type="text" name='lastname' placeholder='lastname' value='<%= lastname %>' />
        <div class='error-input error-lastname'></div>
      </div>
      <div class="col-xs-4">
        <input class='form-control' type="text" name='phone' placeholder='phone #' value='<%= phone  %>' />
        <div class='error-input error-phone'></div>
      </div>
    </div>
    <div class="row" style='margin-top:10px'>
      <div class="col-xs-4 col-sm-offset-8 text-right">
        <button type="button" class="btn btn-sm btn-success save">Submit</button>
      </div>
    </div>
</form>