
                    var newPage=0;
                function loadNewPage(page){
                    $.ajax({
                        headers:{
                        "accept":'application/json'
                        },
                       url:'auto'+page+'.json',
                        dataType:'json',
                        method:'GET',
                    }).done(function(data){
                        
                        var card=$('.forClone')[0];
                         console.log(card);
                        
                        $(data).each(function(index,object){
                        var clone=$(card).clone(true).removeClass('forClone');
                        clone.find('.card-image img').attr("src",object.imgUrl);
                        clone.find('.card-content .innerContent').html(object.content);
                        clone.css("display","");
                        clone.css('opacity',0);
                        
                            $(clone).insertBefore( $('#main').find('.card').first() ).animate({opacity:1},2000)
                         })
                        $('#loadingView').slideUp(0);
                        // hide AJAX loader gif
                        
                    })
                    }
                    setInterval(loadNewPage,5000,newPage);
                
                


                var page=1;
                function loadPage(page){
                    $.ajax({
                        headers:{
                        "accept":'application/json'
                        },
                       url:'page'+page+'.json',
                        dataType:'json',
                        method:'GET',
                    }).done(function(data){
                        
                        var card=$('.forClone')[0];
                         console.log(card);
                        
                        $(data).each(function(index,object){
                        var clone=$(card).clone(true).removeClass('forClone');
                        clone.find('.card-image img').attr("src",object.imgUrl);
                        clone.find('.card-content .innerContent').html(object.content);
                        clone.css("display","");
                        $('#main').append(clone);
                         })
                        $('#loadingView').slideUp(0);
                        // hide AJAX loader gif
                        
                    })
                    }
                    $(window).scroll(function(){
                        var scrollTop=$(this).scrollTop();
                        var screenHeight=$(this).height();
                        var scrollBottom=scrollTop+screenHeight;
                        
                        $("#main").each(function(index,element){
                           var top=$(element).offset().top;
                           var height=$(element).height();
                           var bottom=top+height;
                            if(   scrollBottom>=   bottom ){
                                $('#loadingView').slideDown(1000);
                                // show AJAX loader gif
                               }
                         })
                    })
                    $(function(){
                       Card.init(); 
                         $('#loadingView').slideUp(0);
                        $('#loadingBtn').click(function(){
                            loadPage(page);
                        })
                        loadPage(page);
                    })
                
               