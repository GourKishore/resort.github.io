$(document).ready(function(){
    $("#nav .popup").click(function(){
        $(".booking").fadeIn(1000);
    });

    $(".cross").click(function(){
        $(".booking").fadeOut(1000);
    });

    $(".menubar").click(function(){
        $(".nav2").slideToggle(500);
    })

});


    