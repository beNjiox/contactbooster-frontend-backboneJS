<form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="inputFirstname" class="col-sm-2 control-label">Firstname</label>
    <div class="col-sm-10">
      <input type="text" name="firstname" id="inputFirstname" class="form-control" value="<%= firstname %>" >
    </div>
  </div>
  <div class="form-group">
    <label for="inputLastname" class="col-sm-2 control-label">Lastname</label>
    <div class="col-sm-10">
      <input type="text" name="lastname" id="inputLastname" class="form-control" value="<%= lastname %>" >
    </div>
  </div>
  <div class="form-group">
    <label for="inputPhone" class="col-sm-2 control-label">Phone</label>
    <div class="col-sm-10">
      <input type="text" name="phone" id="inputPhone" class="form-control" value="<%= phone %>" >
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="button" class="btn btn-default back">Back</button>
      <button type="submit" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-danger btn-xs pull-right remove">Remove</button>
    </div>
  </div>
</form>