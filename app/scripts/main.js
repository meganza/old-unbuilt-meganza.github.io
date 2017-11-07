console.log('main.js');

$(document).ready(function(){

  $("#showNetsafe").click(function(){
    if($("#netsafeSlide").is(":visible")){
      $("#netsafeSlide").hide(1000);
    } else{
      $("#netsafeSlide").show(1000);
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
