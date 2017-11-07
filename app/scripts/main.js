console.log('main.js');

$(document).ready(function(){

  $("#showBerkano").click(function(){
    if($("#berkanoSlide").is(":visible")){
      $("#berkanoSlide").hide(1000);
    } else{
      $("#berkanoSlide").show(1000);
    }
  });

  $("#showTypo").click(function(){
    if($("#typoSlide").is(":visible")){
      $("#typoSlide").hide(1000);
    } else{
      $("#typoSlide").show(1000);
    }
  });

  $("#showDLSU").click(function(){
    if($("#dlsuSlide").is(":visible")){
      $("#dlsuSlide").hide(1000);
    } else{
      $("#dlsuSlide").show(1000);
    }
  });

  $("#showTG").click(function(){
    if($("#tgSlide").is(":visible")){
      $("#tgSlide").hide(1000);
    } else{
      $("#tgSlide").show(1000);
    }
  });

  $("#showInfo").click(function(){
    if($("#infoSlide").is(":visible")){
      $("#infoSlide").hide(1000);
    } else{
      $("#infoSlide").show(1000);
    }
  });

  $("#showIllus").click(function(){
    if($("#illuSlide").is(":visible")){
      $("#illuSlide").hide(1000);
    } else{
      $("#illuSlide").show(1000);
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
