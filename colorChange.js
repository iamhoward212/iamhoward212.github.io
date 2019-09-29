

//
//$(".colorChange").hover(function(){
//     $(".colorChange").animate({backgroundColor:"#00ff00"},1000).animate({backgroundColor:"#00ffff"},1000)        
//})

$(document).ready(function(){
  $(".cc").hover(function(){
    $(".cc").css("color","black");
    },function(){
    $(".cc").css("color","blue");
  });
});


console.log("colorChange")