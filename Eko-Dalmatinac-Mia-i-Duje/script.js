$(document).ready(function(){

    //Menu icon interaction

    $("#menu-icon-white").click(function(){
            $(".menu").css({right: "0px"});
            $(".site-overlay").css({left: "-250px"});
    });
    $("#menu-icon-black").click(function(){
            $(".menu").css({right: "-250px"});
            $(".site-overlay").css({left: "-100%"});
    });

    //Slider interaction

    $("#arrow-right").click(function(){
        var i = $("#slider-counter").val(); //Pulls value of counter from html file
        //Right
        if ($("#slider-counter").val() == 0) {  
            $("Header figure").css({right: "200%"});
            $("#dot3").css({background: "#fff"});
            $("#dot1, #dot2").css({background: "none"});
            i = 1;
            $("#slider-counter").val(i);
        //Center
        } else if ($("#slider-counter").val() == -1) {
            $("Header figure").css({right: "100%"});
            $("#dot2").css({background: "#fff"});
            $("#dot1, #dot3").css({background: "none"});
            i = 0;
            $("#slider-counter").val(i);
        //Nothing
        } else {
        }
    });
    $("#arrow-left").click(function(){
        var i = $("#slider-counter").val(); //Pulls value of counter from html file
        //Center
        if ($("#slider-counter").val() == 1) {       
            $("Header figure").css({right: "100%"});
            $("#dot2").css({background: "#fff"});
            $("#dot1, #dot3").css({background: "none"});
            i = 0;
            $("#slider-counter").val(i);
        //Left
        } else if ($("#slider-counter").val() == 0) {
            $("Header figure").css({right: "0%"});
            $("#dot1").css({background: "#fff"});
            $("#dot2, #dot3").css({background: "none"});
            i = -1;
            $("#slider-counter").val(i);
        //Nothing
        } else {
        }
    });
    $("#dot3").click(function(){
        $("Header figure").css({right: "200%"});
        var i = 1;
        $("#slider-counter").val(i);
        $("#dot3").css({background: "#fff"});
        $("#dot2, #dot1").css({background: "none"});
    });
    $("#dot2").click(function(){
        $("Header figure").css({right: "100%"});
        var i = 0;
        $("#slider-counter").val(i);
        $("#dot2").css({background: "#fff"});
        $("#dot1, #dot3").css({background: "none"});
    });
    $("#dot1").click(function(){
        $("Header figure").css({right: "0%"});
        var i = -1;
        $("#slider-counter").val(i);
        $("#dot1").css({background: "#fff"});
        $("#dot3, #dot2").css({background: "none"});
    });
});