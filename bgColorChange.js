

//
//$(".colorChange").hover(function(){
//     $(".colorChange").animate({backgroundColor:"#00ff00"},1000).animate({backgroundColor:"#00ffff"},1000)        
//})

$(document).ready(function(){
//  $(".bgcc").hover(function(){
//    $(".bgcc").css("background-color","black");
//    },function(){
//    $(".bgcc").css("background-color","blue");
//  });
    
    
    $(".bgcc").hover(function(){
    $(".bgcc").css("background-color","black");
         $('.bgcc').animate({backgroundColor:"#00ff00"},1000).animate({backgroundColor:"#00ffff"},1000)   
        
    }
  });
});








console.log("colorChange")