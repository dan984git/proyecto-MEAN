// Closes the sidebar menu
$(window).scroll(function () {
    if ($("#menu").offset().top > 25) {
        $("#menu").addClass("menuDark");
    } else {
        $("#menu").removeClass("menuDark");
    }
});
