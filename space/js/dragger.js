//our website jquery


window.onresize=function(){
    var height=window.innerHeight;
    $(".sortable").css("height",height*7/10);
    tab();
};



 $(function(){
    $(".flip").click(function(){
        $(this).next().slideToggle("slow");
    });
    var height=window.innerHeight;
    $(".sortable").css("height",height*7/10);
    $("#run").hide();
    $( ".sortable" ).sortable({
      items:"div:not(.bin)",
      revert: true,
      sort: function(){
        var t=setTimeout(function(){tab()},1000);
       },
      start: function(){
        $(".bin").addClass("bind");
        $(".bind").removeClass("bin");
        line_drawer();
      },
      stop: function(){
        $(".bind").addClass("bin");
        $(".bind").removeClass("bind");
        nextdel();
        line_drawer();
      }
    });
    $( ".draggable" ).draggable({
      scroll:true,
      connectToSortable: ".sortable",
      helper:"clone",
      revert: false ,
    });
    $(".operator").draggable({
      refreshPositions: true,
       scroll:true,
      helper:"clone",
      revert: false ,
      appendTo:"body"
    });

    $( ".iftext" ).droppable({
    drop :function(event, ui){
      $(".sortable").find("input.iftext").droppable({
          hoverClass: "hover",
          tolerance: "pointer",
          accept:".iif",
          drop :function(event, ui){
          $(this).after('<span class="popen">(</span>'+$(ui.draggable).html()+'<span class="pclose">)</span>');
          $(this).remove();
         }
        });
      $(".sortable").find("input.text").droppable({
          hoverClass: "hover",
          tolerance: "touch",
          accept:".all",
          drop :function(event, ui){
          if($(ui.draggable).hasClass("varr"))
                $(this).after($(ui.draggable).html());
            else
                $(this).after('<span class="popen">(</span>'+$(ui.draggable).html()+'<span class="pclose">)</span>');
          $(this).remove();
         }
        });
     }
    });

    $( ".text" ).droppable({
    drop :function(event, ui){
      $(".sortable").find("input.text").droppable({
          hoverClass: "hover",
          accept:".all",
          drop :function(event, ui){
          if($(ui.draggable).hasClass("varr"))
                $(this).after($(ui.draggable).html());
            else
                $(this).after('<span class="popen">(</span>'+$(ui.draggable).html()+'<span class="pclose">)</span>');
          $(this).remove();
         }
        });
       $(".sortable").find("input.iftext").droppable({
          hoverClass: "hover",
          accept:".iif",
          drop :function(event, ui){
          $(this).after('<span class="popen">(</span>'+$(ui.draggable).html()+'<span class="pclose">)</span>');
          $(this).remove();
         }
        });

     }
    });



   $( ".sortable" ).droppable({
    drop :function(){
     var t=setTimeout(function(){check()},550);
    }
    });

    $( ".bin" ).droppable({
        hoverClass: "thover",
        accept:".draggable",
        drop :function(event, ui){
           var tedad = $(".sortable").children().length;
          if($(ui.draggable).hasClass("if") || $(ui.draggable).hasClass("for") || $(ui.draggable).hasClass("while") || $(ui.draggable).hasClass("keypress") )
          {
            a=0,b=0;
            next=$(ui.draggable).next().next();
            for(i=1;i<=tedad;i++)
            {
              if(next.hasClass("next") && a==0)
              {
                next.remove();
                break;
              }
              if(next.hasClass("for") || next.hasClass("if") || next.hasClass("while"))
              {
                a++;
              }
              if(next.hasClass("next"))
              {
                a--;
              }
              next=next.next();
            }
            $(ui.draggable).remove();
          }
          else if (!$(ui.draggable).hasClass("next"))
          {
             $(ui.draggable).remove();
          }

        }
    });


 });


 function check(){
       var width=window.innerWidth;
       var height=window.innerHeight;
       var tedad = $(".sortable").children().length;
       var sell= $(".sortable div:nth-child(1)");
        id="draggable next command";
        text="&nbsp;&nbsp;&nbsp;&nbsp;";
       for(i=1;i<=tedad;i++)
       {
         //alert(sell.offset().left +" : "+ sell.offset().top);
         if(sell.hasClass("nkeyp"))
         {
           $(sell).after('<div class="'+id+'">'+text+'</div>');
           $(sell).removeClass("nkeyp");
           tedad++;
         }
         if(sell.hasClass("nfor"))
         {
           $(sell).after('<div class="'+id+'">'+text+'</div>');
           $(sell).removeClass("nfor");
           tedad++;
         }
          sell=sell.next();
       }
        $(".sortable").find("input.text").droppable({
          hoverClass: "hover",
          accept:".all",
          drop :function(event, ui){
            if($(ui.draggable).hasClass("varr"))
                $(this).after($(ui.draggable).html());
            else
                $(this).after('<span class="popen">(</span>'+$(ui.draggable).html()+'<span class="pclose">)</span>');
          $(this).remove();
         }
        });
       $(".sortable").find("input.iftext").droppable({
          hoverClass: "hover",
          accept:".iif",
          drop :function(event, ui){
          $(this).after('<span class="popen">(</span>'+$(ui.draggable).html()+'<span class="pclose">)</span>');
          $(this).remove();
         }
        });
    }

 function tab(){
       var tedad = $(".sortable").children().length;
       var sell= $(".sortable div:nth-child(1)");
       var t=0,a=0;
       for(i=1;i<=tedad;i++)
       {
         if(sell.hasClass("for") || sell.hasClass("if") || sell.hasClass("while") || sell.hasClass("keypress"))
         {
          $(sell).css("margin-left",t*20+10+"px");
          t++;
          a=1;
         }
         if(sell.hasClass("next") && t>0 )
         {
            t--;
            $(sell).css("margin-left",t*20+10+"px");
            a=1;
         }
         if(a!=1)
         {
         $(sell).css("margin-left",t*20+10+"px");
         }
         sell=sell.next();
         a=0;
         if (t<0)
         t=0;
       }
       var t=setTimeout(function(){line_drawer()},100);
    }

function nextdel(){
     var tedad = $(".sortable").children().length;
       var sell= $(".sortable div:nth-child(1)");
       var t=0,a=0;
       var tf=0,tn=0;
       for(i=1;i<=tedad;i++)
       {
         if(sell.hasClass("for") || sell.hasClass("if") || sell.hasClass("while") || sell.hasClass("keypress"))
            tf++;
         if(sell.hasClass("next") )
          tn++;

         sell=sell.next();
       }
        if(tn>tf)
        {
          $(".next").first().remove();
          tab();
        }
}
function line_drawer(){
       $(".jquery-line").remove();
       var tedad = $(".sortable").children().length;
       var sell= $(".sortable div:nth-child(1)");
       var t=0,a=0;
       for(i=1;i<=tedad;i++)
       {
         if(sell.hasClass("for") || sell.hasClass("if") || sell.hasClass("while") || sell.hasClass("keypress"))
         {
           sell2=sell;
           for(j=i; j<=tedad; j++)
           {
                if(sell2.hasClass("for") || sell2.hasClass("if") || sell2.hasClass("while") || sell2.hasClass("keypress"))
                {
                  t++;
                }
                if(sell2.hasClass("next"))
                {
                  t--;
                  if(t==0 && sell.offset().left == sell2.offset().left && sell.offset().top+sell.height()<sell2.offset().top)
                  {
                        var src={x:sell.offset().left+8 ,  y:sell.offset().top+sell.height()-2};
                        var dis={x:sell2.offset().left+8 ,  y:sell2.offset().top+3};
                        if(sell.offset().top + sell.height()>=$(".sortable").offset().top+$(".sortable").height() +10)
                        {
                            break;
                        }
                        if(sell2.offset().top<=$(".sortable").offset().top)
                        {
                            break;
                        }
                        if(sell.offset().top + sell.height()<=$(".sortable").offset().top && sell2.offset().top>=$(".sortable").offset().top+$(".sortable").height())
                        {
                            src={x:sell.offset().left+8 ,  y:$(".sortable").offset().top};
                            dis={x:sell2.offset().left+8 ,  y:$(".sortable").offset().top+$(".sortable").height() + 10};
                        }
                        if(sell.offset().top + sell.height()<=$(".sortable").offset().top && sell2.offset().top>$(".sortable").offset().top && sell2.offset().top<$(".sortable").offset().top+$(".sortable").height() +10 )
                        {
                            src={x:sell.offset().left+8 ,  y:$(".sortable").offset().top};
                            dis={x:sell2.offset().left+8 ,  y:sell2.offset().top+3};
                        }
                        if(sell2.offset().top>=$(".sortable").offset().top+$(".sortable").height() +10 && sell.offset().top<$(".sortable").offset().top+$(".sortable").height() && sell.offset().top >$(".sortable").offset().top)
                        {
                            src={x:sell.offset().left+8 ,  y:sell.offset().top+sell.height()-2};
                            dis={x:sell2.offset().left+8 ,  y:$(".sortable").offset().top+$(".sortable").height() +10};
                        }
                        $.line(src, dis, {lineColor:'#00AA00', lineWidth:15});
                        break;
                  }
                }
                sell2=sell2.next();
           }
         }
         sell=sell.next();
       }
   }
