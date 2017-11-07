console.log('main.js');

$(document).ready(function(){

  $('#showBerkano').click(function(){
    if($('#berkanoSlide').is(':visible')){
      $('#berkanoSlide').slideUp(750);
    } else {
      $('#berkanoSlide').slideDown(750);
    }
  });

  $('#showTypo').click(function(){
    if($('#typoSlide').is(':visible')){
      $('#typoSlide').slideUp(750);
    } else {
      $('#typoSlide').slideDown(750);
    }
  });

  $('#showDLSU').click(function(){
    if($('#dlsuSlide').is(':visible')){
      $('#dlsuSlide').slideUp(750);
    } else {
      $('#dlsuSlide').slideDown(750);
    }
  });

  $('#showTG').click(function(){
    if($('#tgSlide').is(':visible')){
      $('#tgSlide').slideUp(750);
    } else {
      $('#tgSlide').slideDown(750);
    }
  });

  $('#showInfo').click(function(){
    if($('#infoSlide').is(':visible')){
      $('#infoSlide').slideUp(750);
    } else {
      $('#infoSlide').slideDown(750);
    }
  });

  $('#showIllus').click(function(){
    if($('#illuSlide').is(':visible')){
      $('#illuSlide').slideUp(750);
    } else {
      $('#illuSlide').slideDown(750);
    }
  });

});

// function showSlide(num){
//   console.log(num);
//   if(num === 1){
//     var x = document.getElementById("netsafeSlide");
//     if(x.style.display === "none"){
//       x.style.display = "block";
//     }
//   }
// }
