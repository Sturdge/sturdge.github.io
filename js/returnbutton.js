$(window).scroll(function(){

    if ($(this).scrollTop() >= 125) {
        $(".return-floating").fadeIn(200);
    } else {
        $('.return-floating').fadeOut(200);
    }

});