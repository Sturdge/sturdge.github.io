$("document").ready(function(){

    const top = $("#top").position().top;
    const about = $("#about").position().top;
    const skills = $("#skills").position().top;
    const projects = $("#projects").position().top;

    $(".toTop").click(function(){
    
        $("html, body").animate({
            scrollTop: top
        }, 300 );

    });
    
    $(".toAbout").click(function(){

        $("html, body").animate({
            scrollTop: about
        }, 300 );

    })
    
    $(".toSkills").click(function(){

        $("html, body").animate({
            scrollTop: skills
        }, 300 );

    })

    $(".toProjects").click(function(){

        $("html, body").animate({
            scrollTop: projects
        }, 300 );

    })

});