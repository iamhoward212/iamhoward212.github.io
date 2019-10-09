
        function clickMe(){
            var taxRate=document.getElementById("inputTax");
            var taxAmount=Number(taxRate.value);
            var amount=document.getElementById("inputValue");
            var amountNumber= Number(amount.value);
            var taxFree=document.getElementById("taxFree");            
            var taxFree=Number(taxFree.value);
           
            
            if(amountNumber>=taxFree){
                 var total=(amountNumber-taxFree)*(taxAmount/100)+amountNumber;
                 var priceAmout=document.getElementById("price");
                 priceAmout.innerHTML="$"+total;
                var taxPrice=document.getElementById("taxPrice");
                var taxtax=total-amountNumber;
                taxPrice.innerHTML="$"+taxtax;
            }else{
                var total=Number(amount.value);
                 var priceAmout=document.getElementById("price");
                 priceAmout.innerHTML="$"+total;
                var taxPrice=document.getElementById("taxPrice");
                
                taxPrice.innerHTML="$"+0;
            };
            };            
         
        
       