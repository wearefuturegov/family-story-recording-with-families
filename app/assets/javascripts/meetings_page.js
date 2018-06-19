$.fn.meetingsPage = function() {
  if (this.length === 0) { return false; }

  $('#trumbowyg').trumbowyg('html', localStorage.getItem("visit_notes"));

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
      var action = '<div class="single_action"><select><option>' + this["Person"] + '</option><option><option>Dave</option><option>Sarah</option><option>Other</option></select><input type="text" value="' + this["Content"] + '"><div class="delete button negative"><i class="fa fa-trash"></i></div></div>';

      $('#actions_container').append(action);
    });
  }

  $('#add_action').click(function() {
    var action = '<div class="single_action"><select><option>Dave</option><option>Sarah</option><option>Other</option></select><input type="text"><div class="delete button negative"><i class="fa fa-trash"></i></div></div>';
    $('#actions_container').append(action);
  });

  $('#actions_container').on("click", '.single_action .delete', function() {
    $(this).closest('.single_action').remove();
  });

  $('#save_visit').click(function(e) {
    e.preventDefault();

    localStorage.setItem("visit_notes", $('#trumbowyg').trumbowyg('html'));

    if($('.single_action').length) {
      var action_array = [];
      $('.single_action').each(function() {
        if($(this).find('input').val()) {
          action_array.push({
            Person : $(this).find('select').val(),
            Content : $(this).find('input').val()
          });
        }
      });
      localStorage.setItem("agreed_actions", JSON.stringify(action_array));
    }

    window.location = $(this).attr('href');
  });

};
