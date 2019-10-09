var calculater=function(){
    var inputValue=document.getElementById("inputNumber").value;
    console.log(inputValue)
    var sum=0;
    
    
     if( inputValue<=0  ){
            alert("end value should larger than 0");
      }else{ 
              for(var i=0 ; i<=inputValue   ; i++ ){
                 sum+=i;
              }
          document.getElementById("sumResult").innerHTML=sum;
            } 
    }
    
var clickMe=function(){
    calculater();
}
