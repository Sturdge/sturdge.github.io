$("document").ready(function(){

    $("#toTop").click(function(){
        const top = $("#top").position().top;
    
        $("html, body").animate({
            scrollTop: top
        }, 300 );

    });
    
    $("#toAbout").click(function(){
        const about = $("#about").position().top;

        $("html, body").animate({
            scrollTop: about
        }, 300 );

    })
    
    $("#toSkills").click(function(){
        const skills = $("#skills").position().top;

        $("html, body").animate({
            scrollTop: skills
        }, 300 );

    })

    $("#toProjects").click(function(){
        const projects = $("#projects").position().top;

        $("html, body").animate({
            scrollTop: projects
        }, 300 );

    })

});