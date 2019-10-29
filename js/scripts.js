$(document).ready(function(){
  $("form").submit(function(event){
  var countBy = parseInt($("#countBy").val());
  var goal = parseInt($("#countTo").val());
  var output = [];

  for(i = countBy; i <= goal; i += countBy){
    output.push(i);
    $("#display").append("<li>" + i + "</li>");

  }

  // $("#display").append("<li>" + output + "</li>");

  event.preventDefault();


});

});
