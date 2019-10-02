Card={ 
     init:function(){

        $('.card').mouseenter(function(){
             $(this).find('.card-content').stop(true,false).animate({height:"100%"},1000);
         }).mouseleave(function(){
                  $(this).find('.card-content').stop(true,false).animate({height:0},1000)
             });
}
}
