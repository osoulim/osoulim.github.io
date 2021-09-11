//itnoaa//
$(function(){
    $(".check").click(function(){
      compile();
      jcompile();
      });
});

var forcounter=0;

function checker(){
    var tedad=$(".sortable").children().length;
    var sell=$(".sortable div:nth-child(2)");
    for(ij=0;ij<tedad;ij++)
    {
        tedad2=sell.children().length;
        sell2=sell.children(":first");
        for(ij2=0;ij2<tedad2;ij2++)
        {
          if(sell2.hasClass("text") || sell2.hasClass("iftext") || sell2.hasClass("vvarr") || sell2.hasClass("lets") || sell2.hasClass("input") ){
            if(!sell2.val()){return 1;}
            }
          sell2=sell2.next();
        }
        sell=sell.next();
    }
    return 0;
}

function compile(){
       if(checker())
       {
       alert("please fill the text boxes!");
       return false;
       }
       else
       {
       var tedad = $(".sortable").children().length;
       var sell= $(".sortable div:nth-child(2)");
       $(".result").text("");
       $(".result").text($(".result").text() + '#include <iostream> \n #include <cmath> \n #include <conio.h> \n using namespace std;\n');
       varreturner();
       forcounter=0;
       $(".result").text($(".result").text() + "int main(){\n");
       for(i2=2;i2<=tedad;i2++)
       {
            $(".result").text($(".result").text() + sell.creturner());
            $(".result").text($(".result").text()+"\n");
            sell=sell.next();
       }
       $(".result").text($(".result").text() + "getch(); \n return 0;\n}");
       $("#send").text($(".result").text());
       $("#run").show();
       }

       return true;

};

function varreturner(){
    var strs=" ";
    var sell=$(".int").children(":first");
    if($(".int").children().length)
    {

        for(i3=0;i3<$(".variable").find(".int").children().length;i3++)
        {
         strs+="int " + sell.val()+";\n ";
         sell=sell.next();
        }
    }

    var sell=$(".str").children(":first");
    if($(".str").children().length)
    {
        for(i3=0;i3<$(".variable").find(".str").children().length;i3++)
        {
         strs+="string " + sell.val()+";\n ";
         sell=sell.next();
        }
    }
    var sell=$(".float").children(":first");
    if($(".float").children().length)
    {
        for(i3=0;i3<$(".variable").find(".float").children().length;i3++)
        {
         strs+="float " + sell.val()+";\n ";
         sell=sell.next();
        }
    }
    $(".result").html($(".result").html() + strs);
    };

jQuery.fn.creturner = function (){
    var str=" ";
    if($(this).hasClass("for"))
    {
      str+="for(int i"+forcounter+"=0; i"+forcounter+"<"+$(this).sreturner()+"; i"+forcounter+"++){";
      forcounter++;
    }
    if($(this).hasClass("while"))
    {
      str+="while("+$(this).sreturner()+"){";
    }
    if($(this).hasClass("next"))
    {
      str+="}";
    }
    if($(this).hasClass("if"))
    {
      str+="if("+$(this).sreturner()+"){";
    }
    if($(this).hasClass("delay"))
    {
      str+="delay("+$(this).sreturner()+");";
    }
    if($(this).hasClass("print"))
    {
      str+="cout<<"+$(this).sreturner()+";";
    }
    if($(this).hasClass("newl"))
    {
      str+="cout<<endl;";
    }
    if($(this).hasClass("space"))
    {
      str+="cout<<' ';";
    }
    if($(this).hasClass("input"))
    {
      str+="cin>>"+$(this).sreturner()+";";
    }
    if($(this).hasClass("end"))
    {
      str+="return 0;";
    }
    if($(this).hasClass("let"))
    {
      str+=$(this).sreturner()+";";
    }
    if($(this).hasClass("cls"))
    {
      str+='system("cls");';
    }
    if($(this).hasClass("keypress"))
    {
      str+="while(kbhit()){"
    }
    return str;
};

jQuery.fn.sreturner = function(){
       var t = $(this).children().length;
       var sell= $(this).children(":first");
       var s=" ";
       for(i=1;i<=t;i++)
       {
            if(sell.hasClass("text") || sell.hasClass("kpval") || sell.hasClass("lets") || sell.hasClass("input"))
                s+=sell.val();
            if(sell.hasClass("int"))
                s+="(int)"+sell.val();
            if(sell.hasClass("str"))
                s+="(string)"+sell.val();
            if(sell.hasClass("float"))
                s+="(float)"+sell.val();
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
                s+="pow";
            if(sell.hasClass("abs"))
                s+="abs";
            if(sell.hasClass("sqrt"))
                s+="sqrt";
            if(sell.hasClass("round"))
                s+="(int)";
            if(sell.hasClass("rand"))
                s+="rand";
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