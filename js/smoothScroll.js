$('document').ready(function(){

    // Animate Smooth Scroll
    $('#toTop').on('click', function() {
        const top = $('#top').position().top;
    
        $('html, body').animate(
        {
            scrollTop: top
        },
        900
        );
    });

});