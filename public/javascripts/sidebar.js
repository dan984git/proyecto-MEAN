// Closes the sidebar menu
$(document).ready(function () {
    $("#sidebarCollapse").on('click', function () {
        $("#sidebar").toggleClass('active');
    });
    $("#sidebarCerrar").on('click', function () {
        $("#sidebar").toggleClass('active');
    });
    $(".itemButtonC").on('click', function () {
        $("#sidebarCarrito").removeClass('active');
    });
    $("#carrito").on('click', function () {
        $("#sidebarCarrito").toggleClass('active');       
    });
    $("#carritoCerrar").on('click', function () {
        $("#sidebarCarrito").toggleClass('active');      
    });
});
/*$(document).ready(function () {
    var val = $('#qty_carrito').val();
    $('#qty_carrito').prop('disabled', true);
    $('#plus-btnC').click(function () {
        $('#qty_carrito').val(parseInt($('#qty_carrito').val()) + 1 );    
    });
    $('#minus-btnC').click(function () {
        $('#qty_carrito').val(parseInt($('#qty_carrito').val()) - 1 );
        if ($('#qty_carrito').val() <= 0) {
            $('#qty_carrito').val(1);
        }
    });
});*/

$(window).scroll(function () {
    if ($("#menu").offset().top > 250) {
        $("#menu").addClass("menuDark");
    } else {
        $("#menu").removeClass("menuDark");
    }
});



