$(document).ready(function() {

  $('.accordion').each(function() { $(this).accordion() });


  $('#not_successful').click(function(){

    // IN REALITY - this would only be used for mobile, we would want an if statement here that pulls up a better designed widget for desktop
    var not_successful = prompt("Unsuccessful contact with " + $('#visit_family_name').html(), "Add a note...");
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2);
    var dateTime = time+' '+date;

    console.log(not_successful)

    if (not_successful != null) {
      if (not_successful != "Add a note..." || not_successful != "") {
        $('#visit_contact').html('Visit recorded unsuccessful at ' + dateTime + " - <strong>" + not_successful + "</strong>");
      } else {
        $('#visit_contact').html('Visit recorded unsuccessful at ' + dateTime);
      }
    }
  });
});
