$(window).scroll(function(){

    if ($(this).scrollTop() >= 300) {
        $(".main-nav").fadeIn(200);
        $(".return-floating").fadeIn(200);
    } else {
        $(".main-nav").fadeOut(200);
        $(".return-floating").fadeOut(200);
    }

});