$(function() {
});

function input_validate(form_id) {
  var validate_array = [];
  $(form_id + ' input:not([type="checkbox"]').each(function(){
    var string = $(this).val();
    if (!$(this).val().length) {
      validate_array.push("false");
    } else if(/^[a-zA-Z0-9- ]*$/.test(string) == false) {
      validate_array.push("false");
    } else {
      validate_array.push("true");
    }
  })
  if(jQuery.inArray("false", validate_array) !== -1) {
    return false
  } else {
    return true
  }
}

function zad_1(id) {
  id = "#" + id;
  if(input_validate(id) == false) {
    alert("Niestety któreś z pól jest puste bądź zawiera niedozwolone znaki");
    return false
  }
  var d = 0;
  var w = parseInt($(id + " input[name*='zad_1_weksla']").val()) *1000000;
  var p = parseInt($(id + " input[name*='zad_1_dyskont']").val());
  var t = parseInt($(id + " input[name*='zad_1_data']").val());

  d = (w*p / 100 * t)/(100*360);
  $(id + " info" ).last().text("Kwota odsetek to: " + d.toFixed(8) + " zł. Po odjęciu daje nam to: " + (w-d) + " zł.");
}

function zad_2(id) {
  id = "#" + id;
  var string = $(id + " input[name*='zad_2_text']").val();
  var nP = "";
  var p = "";
  var i;
  for (i = 0; i < string.length; i++) {
      var nPletter = string.charAt(i++)
      nP = nP.concat(nPletter);
  }
  for (i = 1; i < string.length; i++) {
      var pLetter = string.charAt(i++)
      p = p.concat(pLetter);
  }
  $(id + " input[name*='zad_2_nP']").val(nP);
  $(id + " input[name*='zad_2_P']").val(p);
}

function zad_3(id) {
  id = "#" + id;
  var arrow_info = parseInt($(id).attr('info'));
  switch (arrow_info) {
    case 0:
      $(id).css("transform", "rotate(90deg)");
      $(id).attr("info","1");
      break;
    case 1:
      $(id).css("transform", "rotate(180deg)");
      $(id).attr("info","2");
      break;
    case 2:
      $(id).css("transform", "rotate(270deg)");
      $(id).attr("info","3");
      break;
    case 3:
      $(id).css("transform", "rotate(0deg)");
      $(id).attr("info","0");
      break;
  }
}
function zad_4(id) {
  id = "#" + id;
  if(input_validate(id) == false) {
    alert("Niestety któreś z pól jest puste bądź zawiera niedozwolone znaki");
    return false;
  }
  return true;
}
function zad_5(id) {
  id = "#" + id;
  var upperCase= new RegExp('[A-Z]');
  var text_oryginal = $(id).find("input").val();
  var text_replaced = "";
  for (i = 0; i < text_oryginal.length; i++) {
      var text_letter = text_oryginal.charAt(i)
      if(text_letter.match(upperCase)) {
        text_replaced = text_replaced + text_letter.toLowerCase();
      } else {
        text_replaced = text_replaced + text_letter.toUpperCase();
      }
  }
  $(id).find("input:last").val(text_replaced);
}
