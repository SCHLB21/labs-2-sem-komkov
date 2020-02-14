$(document).ready(function(){
    $(".invisible").children("p").click(function(){
        $(this).hide();
    });
    $("body").find(".box").css( "background-color", "red" );
    $(".box").click(function(){
        $(this).toggleClass("boxing");
        if($(this).is(".boxing")){
            $(this).css( "background-color", "blue" );
        }else{
            $(this).css( "background-color", "red" );  
        }
    });
    $(".off").click(function(){
        if($(this).is(".off")){
            $(this).removeClass("off").addClass("on").text("ON")
        }else if($(this).is(".on")){
            $(this).removeClass("on").addClass("off").text("OFF")
        }
    });
    $(".text").click(function(){
        var htmlText = $(this).html();
        $(this).text(htmlText)
    });
    $( ".filter" ).children().css( "background", "#c8ebcc" ).filter( ".mid" ).css( "border", "1px solid red" );
    $(".attribute").click(function(){
        var title=$(this).attr("class")
        $(this).children("strong").text(title)
    });
    $( "input" ).prop( "checked", true ).val("yes");
    // $( "p" ).click(function( event, a, b ) {
    // console.log(a,b)
    //     }).trigger( "click", [ "foo", "bar" ] );
    $(".return").click(function(){
        $("p").show()
    });
    $(".object").click(function(){
        $(this).wrap("<h1 style='margin: 0;'></h1>")
        $(this).prepend("<small>prepend</small><br>")
        $(this).append("<br><small>append</small>")
    });
    $( "#datepicker" ).datepicker();
    $(".draggable").css("cursor", "pointer").draggable();
});