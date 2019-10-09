function findTbody(){
    var tbody=$('.product_options_table').find('tbody');  
      return tbody;
       
  }
  function createRow(){
      var row=$('.tmp')[0];
      return $(row).clone(true,true);
  }
  function addRow(index){
      var tbody=findTbody();
     
      var newRow=createRow();
      newRow.attr('data-id',index);
      newRow.removeClass('tmp');
      var productIDTd=newRow.find('.product_id');
      productIDTd.html(index);
      
      var productNameInput=newRow.find('.product_name>input');
      var optionsName="product[option]["+index+"][name]";
      productNameInput.attr("name",optionsName)
      
     
      tbody.append(newRow);
  }
  function deleteRow(data_id){
      var tbody=findTbody();
      var str='tr[data-id='+data_id+']';
      var tr=tbody.find(str);     
      
      if(tr.length>0){
          tr.remove();
      }
      //console.log(tr[0].outerHTML);
      
  }
  var counterIndex=0;
  $(function(){
     $(".add_Button").click(function(){
          addRow(counterIndex);
         counterIndex+=1;
         
  })
  $(".delete_Button").click(function(){
      var tr=$(this).closest("tr");
      var data_id=tr.data('id');
     
      deleteRow(data_id);
  })  
  })
 
