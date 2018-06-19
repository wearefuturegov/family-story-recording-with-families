$.fn.displayPage = function() {
  if (this.length === 0) { return false; }

  var visit_notes = localStorage.getItem("visit_notes");
  if(visit_notes) {
    $('#visit_notes_saved').html(visit_notes);
    //localStorage.removeItem("visit_notes");
  }

  var agreed_actions = localStorage.getItem("agreed_actions");
  if(agreed_actions) {
    $('#agreed_actions_saved').html("");
    var actions_array = JSON.parse(agreed_actions);
    actions_array.sort(function(a, b){
      if(a.Person < b.Person) return -1;
      if(a.Person > b.Person) return 1;
      return 0;
    })
    $.each(actions_array, function(){
      var action = '<div class="saved_action"><span class="action_name">' + this["Person"] + '</span> - ' + this["Content"] + '</div>';
      $('#agreed_actions_saved').append(action);
    });
  }
  //localStorage.removeItem("agreed_actions");


  $('.location_choice .content').click(function() {
    $(this).closest('.not_edit').removeClass('not_edit');
    $(this).next('input').show().focus().select();
    $(this).hide();
  })

  $('.single_person .delete').click(function() {
    $(this).closest('.single_person').slideUp();
  });
};


