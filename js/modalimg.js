$("document").ready(function(){

    $(".gallery-item").click(function(){
        $(".modal").css("display", "block");
        $(".modal-content").attr("src", $(this).attr("src"));
        $(".return-floating").css("display", "none");
    });

    $(".closeModal").click(function(){
        closeModal();
    });

    $(".modal").click(function(){
        closeModal();
    });

    function closeModal(){
        $(".modal").css("display", "none");
        $(".return-floating").fadeIn(200);
    }

});