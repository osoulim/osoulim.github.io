function jcompile(){
     if(checker())
        {
          alert("please fill the text boxes!");
          return false;
        }
       else
       {
       var tedad = $(".sortable").children().length;
       var sell= $(".sortable div:nth-child(2)");
       varmaker();
       varupdate();
       $(".jresult").text("");
       $(".jresult").text($(".jresult").text()+ '$(function(){');
       $(".jresult").text($(".jresult").text()+"inf=10000;");
       $(".jresult").text($(".jresult").text()+"\n");
       forcounter=0;
        for(i2=2;i2<=tedad;i2++)
        {
            $(".jresult").text($(".jresult").text() + sell.jcreturner());
            $(".jresult").text($(".jresult").text()+"\n");
            sell=sell.next();
        }

        $(".jresult").text($(".jresult").text()+ '});');
        $(".jscode").text($(".jresult").text());

       }
       return true;
};

jQuery.fn.jcreturner = function (){
    var str=" ";
    if($(this).hasClass("for"))
    {
      str+="for(var i"+forcounter+"=0; i"+forcounter+"<"+$(this).jsreturner()+"; i"+forcounter+"++){";
      forcounter++;
    }
    if($(this).hasClass("while"))
    {
      str+="for(var i"+forcounter+"=0; i"+forcounter+"<inf && " + $(this).jsreturner()+"; i"+forcounter+"++){";
      forcounter++;
    }
    if($(this).hasClass("next"))
    {
      str+="}";
    }
    if($(this).hasClass("if"))
    {
      str+="if("+$(this).jsreturner()+"){";
    }
    if($(this).hasClass("delay"))
    {
      str+="delay("+$(this).jsreturner()+");";
    }
    if($(this).hasClass("print"))
    {
      str+="$('.console').html($('.console').html() +"+$(this).jsreturner()+");";
    }
    if($(this).hasClass("newl"))
    {
      str+="$('.console').html($('.console').html() +  '<br />' );";
    }
    if($(this).hasClass("space"))
    {
      str+="$('.console').html($('.console').html() +  '&nbsp;' );";
    }
    if($(this).hasClass("input"))
    {
      str+=$(this).jsreturner()+" = parseInt(prompt('Please enter " + $(this).jsreturner() + " value' ,''));" + "\n";
      str+="update();"
    }
    if($(this).hasClass("end"))
    {
      str+="return ;";
    }
    if($(this).hasClass("let"))
    {
      str+=$(this).jsreturner()+";" + "\n" ;
      str+="update();"
    }
    if($(this).hasClass("cls"))
    {
      str+="$('.console').text('');";
    }
    return str;
};


jQuery.fn.jsreturner = function(){
       var t = $(this).children().length;
       var sell= $(this).children(":first");
       var s=" ";
       for(i=1;i<=t;i++)
       {
            if(sell.hasClass("text") || sell.hasClass("kpval") || sell.hasClass("lets") || sell.hasClass("input"))
                s+=sell.val();
            if(sell.hasClass("vvarr"))
                s+=sell.val();
            if(sell.hasClass("plus"))
                s+="+";
            if(sell.hasClass("minus"))
                s+="-";
            if(sell.hasClass("division"))
                s+="/";
            if(sell.hasClass("multiplication"))
                s+="*";
            if(sell.hasClass("mod"))
                s+="%";
            if(sell.hasClass("bigger"))
                s+=">";
            if(sell.hasClass("smaller"))
                s+="<";
            if(sell.hasClass("equal"))
                s+="=";
            if(sell.hasClass("equel"))
                s+="==";
            if(sell.hasClass("not"))
                s+="!=";
            if(sell.hasClass("biggerequel"))
                s+=">=";
            if(sell.hasClass("smmalerequel"))
                s+="<=";
            if(sell.hasClass("power"))
                s+="Math.pow";
            if(sell.hasClass("abs"))
                s+="Math.abs";
            if(sell.hasClass("sqrt"))
                s+="Math.sqrt";
            if(sell.hasClass("round"))
                s+="Math.floor";
            if(sell.hasClass("rand"))
                s+="randomizze";
            if(sell.hasClass("and"))
                s+="&&";
            if(sell.hasClass("or"))
                s+="||";
            if(sell.hasClass("popen"))
                s+="(";
            if(sell.hasClass("pclose"))
                s+=")";
            if(sell.hasClass("comma"))
                s+=",";
            sell=sell.next();
       }
       return s;
};

function varmaker()
{
  var strs=" ";
  strs+="$('.debuger').html($('.debuger').html() + '<table border=1 width=20 class=zz>');"+"\n";
  strs+="$('.zz').html($('.zz').html() + '<tr class=s1>');" +"\n";
    var sell=$(".int").children(":first");
    if($(".int").children().length)
    {

        for(i3=0;i3<$(".variable").find(".int").children().length;i3++)
        {
         strs+="$('.s1').html($('.s1').html()+ '<td>" + sell.val()  + " </td>' );" + "\n";
         sell=sell.next();
        }
    }

    var sell=$(".str").children(":first");
    if($(".str").children().length)
    {
        for(i3=0;i3<$(".variable").find(".str").children().length;i3++)
        {
         strs+="$('.debuger').html($('.debuger').html()+ '<td>" + sell.val()  + " </td>' );" + "\n";
         sell=sell.next();
        }
    }
    var sell=$(".float").children(":first");
    if($(".float").children().length)
    {
        for(i3=0;i3<$(".variable").find(".float").children().length;i3++)
        {
         strs+="$('.s1').html($('.s1').html()+ '<td>" + sell.val() + " </td>' );" +" \n";
         sell=sell.next();
        }
    }
     strs+="$('.zz').html($('.zz').html() + '</tr>');"+"\n";
      strs+="$('.zz').html($('.zz').html() + '<tr class=s2>');" +"\n";


      var sell=$(".int").children(":first");
    if($(".int").children().length)
    {

        for(i3=0;i3<$(".variable").find(".int").children().length;i3++)
        {
         strs+="$('.s2').html($('.s2').html()+ '<td class=" + sell.val()  + "> </td>' );" + "\n";
         strs+=sell.val() + "= 0;" + "\n";
         sell=sell.next();
        }
    }

    var sell=$(".str").children(":first");
    if($(".str").children().length)
    {
        for(i3=0;i3<$(".variable").find(".str").children().length;i3++)
        {
         strs+="$('.s2').html($('.s2').html()+ '<td class=" + sell.val()  + "> </td>' );" +" \n";
         strs+=sell.val() + "= 0;" + "\n";
         sell=sell.next();
        }
    }
    var sell=$(".float").children(":first");
    if($(".float").children().length)
    {
        for(i3=0;i3<$(".variable").find(".float").children().length;i3++)
        {
         strs+="$('.s2').html($('.s2').html()+ '<td class=" + sell.val()  + "> </td>' );" + "\n";
         strs+=sell.val() + "= 0;" + "\n";
         sell=sell.next();
        }
    }
    strs+="$('.zz').html($('.debuger').html() + '</tr> </table>');" +"\n";
    strs+="update();"+"\n";
    $(".jtmake" ).val(strs);

}

function varupdate()
{
    strs=" ";
    var sell=$(".int").children(":first");
    if($(".int").children().length)
    {

        for(i3=0;i3<$(".variable").find(".int").children().length;i3++)
        {
            strs+="$('."+sell.val()+"' ).html("+ sell.val()+ ");" + "\n";
            sell=sell.next();
        }
    }

    var sell=$(".str").children(":first");
    if($(".str").children().length)
    {
        for(i3=0;i3<$(".variable").find(".str").children().length;i3++)
        {
            strs+="$('."+sell.val()+"' ).html(" +sell.val() +");" + "\n";
            sell=sell.next();
        }
    }
    var sell=$(".float").children(":first");
    if($(".float").children().length)
    {
        for(i3=0;i3<$(".variable").find(".float").children().length;i3++)
        {
            strs+="$('."+sell.val()+"' ).html("+ sell.val()+ ");" + "\n";
            sell=sell.next();
        }
    }
    //strs+="x=setTimeout(200);"+"\n";
    //strs+="clearTimeout(x);";
    $(".jupdate").val(strs);
}