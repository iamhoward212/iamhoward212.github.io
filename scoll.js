              

       $(window).scroll(function(){
           
              var Pb={}; 
              Pb.appear=function(elementsSelector,duration=1000){
                      $(window).scroll(function(){
                      
                      var scrollTop=$(this).scrollTop();            //scrollTop  螢幕上所看到的最上方  離 網頁最上端 的距離
                      var screenHeight=$(this).height();           //screenHeight  螢幕的寬度    
                      var scrollBottom=scrollTop+screenHeight;    //scrollBottom  代表螢幕中最下方與網頁最上端的距離
                      
                      $(elementsSelector).each(function(index,element){
                      var top=$(element).offset().top; 
                      
                      var height=$(element).height();
                      var bottom=top+height;
                        if( (  scrollBottom >=top  && scrollTop <=top )   //當網頁 由上往下 or 由下往上 滑動到黑色盒子該出現的位置時 黑色盒子會慢慢的顯現出來
                          || ( scrollBottom >=bottom  && scrollTop <=bottom )){
                               $(element).animate({opacity:1},duration)      
                         }    
                      })    
                    }
                  )}
                Pb.opacityZero=function(elementsSelector){
                    $(elementsSelector).css("opacity",0);
                }
                Pb.init=function(){
                     Pb.opacityZero('._appear');
                     Pb.appear('._appear',4000);
                }
                Pb.init();
                
                  })

