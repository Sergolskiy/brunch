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
				responsive: [
					{
						breakpoint: 992,
						settings: {
							verticalSwiping: false,
							vertical: false,
							verticalScrolling: false,
						}
					},
				]
    });


    $(".header__mobile-menu-btn").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();

        $('.header__menu').toggleClass("header__menu--open");

        return false;
    });


		if ($(window).width() > 992) {

			$('.zoomple').zoomple({
				offset: {x: -100, y: -100},
				zoomWidth: 200,
				zoomHeight: 200,
				roundedCorners: true,
				showCursor: true
			});

		} else {
			$('a.zoomple').click(function (e) {
				e.preventDefault();
			});
		}

		$(document).on('click', '.checkout__step-head', function (e) {
			var el = $(this);
				// $(this).closest('.checkout__step').toggleClass('checkout__step--active');
		});

		$(document).on('click', '.checkout__step-btn-prev .checkout__step-btn-link', function (e) {
			var el = $(this);
			e.preventDefault();
			$(this).closest('.checkout__step').removeClass('checkout__step--active');
			$(this).closest('.checkout__step').prev().addClass('checkout__step--active');
		});

		$(document).on('click', '.checkout__step-btn-next .checkout__step-btn-link', function (e) {
			var el = $(this);
			e.preventDefault();
			if (cartValid(el)) {
				$(this).closest('.checkout__step').removeClass('checkout__step--active');
				$(this).closest('.checkout__step').next().addClass('checkout__step--active');
			}
		});

		$(document).on('click', '.checkout__step-tab-item', function (e) {
			$('.checkout__step-tab-item').removeClass('checkout__step-tab-item--active');
			$(this).addClass('checkout__step-tab-item--active');
			if($(this).hasClass('checkout__step-tab-item--courier')) {
				$('.checkout__step-subcontent').removeClass('checkout__step-subcontent--active');
				$('.checkout__step-subcontent--courier').addClass('checkout__step-subcontent--active');
			}
			if($(this).hasClass('checkout__step-tab-item--pickup')) {
				$('.checkout__step-subcontent').removeClass('checkout__step-subcontent--active');
				$('.checkout__step-subcontent--pickup').addClass('checkout__step-subcontent--active');
			}
		});

		function cartValid(e) {
			var valid = true;
			var step = e.closest('.checkout__step');
			var flag = step.find('.checkout__step-subcontent').hasClass('checkout__step-subcontent--active');

			step.find('input.required').each(function () {
				$(this).removeClass('error');
				if( $(this).val().length > 0) {
					$(this).removeClass('error');
				} else {
					$(this).addClass('error');
				}
			});

			if(flag) {
				step.find('.checkout__step-subcontent:not(.checkout__step-subcontent--active)').find('input.required').each(function () {
					$(this).removeClass('error');
				});
			}

			step.find('input.required').each(function () {
				if($(this).hasClass('error')) {
					valid = false;
				}
			});

			return valid;
		}

	  $('.phonemask').inputmask('+38-099-999-99-99');

});

