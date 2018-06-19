$.fn.meetingsPage = function() {
  if (this.length === 0) { return false; }

  $('#add_action').click(function() {
    var action = '<div class="single_action"><select><option>Dave</option><option>Sarah</option><option>Other</option></select><input type="text"><div class="delete button negative"><i class="fa fa-trash"></i></div></div>';
    $('#actions_container').append(action);
  });

  $('#actions_container').on("click", '.single_action .delete', function() {
    $(this).closest('.single_action').remove();
  });

};
