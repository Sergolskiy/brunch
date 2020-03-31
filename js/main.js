$(document).ready(function () {


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 1
    });


    $(".header__mobile-menu-btn").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();

        $('.header__menu').toggleClass("header__menu--open");

        return false;
    });

});

