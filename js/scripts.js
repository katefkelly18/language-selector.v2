$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var formIds = ["#gender", "#education", "#level", "#work", "#time", "#location"];

    formIds.forEach(function(id) {
    var gender = $("select#gender").val();
    var education = $("input:radio[name=education]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var location = $("input:radio[name=location]:checked").val();

    if (education) {
      $('#javascript').show();
      $('#csharp').hide();
      $('#python').hide();
    } else if (gender === 'male' && time === 'small') {
      $('#csharp').show();
      ('#python').hide();
      ('#javascript').hide();
    } else if (work === 'alone' && location ==='seattle')
      $('#python').show();
      ('#csharp').hide();
      ('#javascript').hide();
    }
    event.preventDefault();
  });
});
