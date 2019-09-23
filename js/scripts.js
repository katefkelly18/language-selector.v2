$(document).ready(function() {
  $(form"#language-selector").submit(function(event) {
    var gender = $("select#gender").val();
    var education = $("input:radio[name=education]:checked").val();
    var level = $("input:radio[name=level]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var location = $("input:radio[name=location]:checked").val();

    if (education === 'highschool' && level === 'beginner') {
      answer = ('#javascript');
    } else if (gender === 'male' && time === 'small') {
      answer = ('#csharp');
    } else if (work === 'alone' && location ==='seattle')
      answer = ('#python')
    }
    event.preventDefault();
  });
});
