$(document).ready(function() {
    // Burger
    $('.icon-wrap__icon').click(function(event) {
        $('.icon-wrap__icon,.menu__body').toggleClass('active');
        $('#bar').toggleClass('_active-bar');
        $('body').toggleClass('lock');
    })
});