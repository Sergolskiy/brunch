$(document).ready(function () {


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 1
    });


    $('.product__slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__slider-small'
    });
    $('.product__slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__slider-big',
        dots: false,
        focusOnSelect: true,
        verticalSwiping: true,
        vertical: true,
        verticalScrolling: true,
        centerMode: true,
        centerPadding: '0',
    });


    $(".header__mobile-menu-btn").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();

        $('.header__menu').toggleClass("header__menu--open");

        return false;
    });

    $('.zoom').zoom({
        magnify: 3
    });

});

