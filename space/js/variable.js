
jQuery.fn.doesExist = function(){
        return jQuery(this).length > 0;
 };

$(function(){
$(".vmake").click(function(){
  aa='.var_'+$(".maketextbox").val();
  if($(aa).doesExist())
    alert("Dont make same name variable!");
  else{
    if($(".maketextbox").val() )
 {
   nvar='<option class="var_'+$(".maketextbox").val() +'" value="var_'+$(".maketextbox").val()+'">'+$(".maketextbox").val()+'</option>';
   if($(".type").val()=="int")
    {
      $(".int").append(nvar);
    }
    if($(".type").val()=="str")
    {
      $(".str").append(nvar);
    }
    if($(".type").val()=="float")
    {
      $(".float").append(nvar);
    }

    $(".typedelete").append(nvar);
    $(".lets").append(nvar);
    $(".input").append(nvar);
 }
 }


});
$(".vdelete").click(function(){
    $('.'+$(".typedelete").val()).remove();

});

});
