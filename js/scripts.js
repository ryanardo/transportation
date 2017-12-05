//Back end logic
var userResponses = [];


//Front end logic
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    }); //End work-transportation responses

    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    }); //End of fun-transportation responses

    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);
    }); //End of work-transportation push-to userResponses array function.

    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
    }); //End work-transportation toUpperCase function

    $('#transportation_survey').hide();
  }); //End of form submit function
}); //End document ready function.
