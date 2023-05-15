(function($) {
    "use strict"
    jQuery(document).ready(function($) {
        // фиксировать меню
        $(".header-menu").sticky({
            topSpacing: 0
        });
        // плавность + переход
        $(".main-menu ul li a").on('click', function(event) {
            var linkHref = $(this).attr("href");
            var headerHeight = $(".header-menu").outerHeight();
            $("html, body").animate({
                scrollTop: $(linkHref).offset().top - headerHeight
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
        // меню анимация
        var scrollLink = $('.scroll-link');

        $(window).on('scroll', function() {
            var scrollBarLocation = $(this).scrollTop();
            var headerMenuHeight = $('.header-area').outerHeight();
            scrollLink.each(function() {
                var sectionOffset = $(this.hash).offset().top - headerMenuHeight
                if (sectionOffset <= scrollBarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });
        // мобильное меню
        $('.custom-navbar').on('click', function() {
            $('.main-menu ul').slideToggle(600);
        });
        $(window).on('resize', function() {
            if ($(window).width() > 991) {
                $('.main-menu ul').removeAttr('style');
            }
        });
        
        $('.slider-area').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            dots: true,
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        });
        // отзывы слайдер
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
        // активация
        var s = skrollr.init();
    });

    jQuery(window).on('load', function() {
        // активация
        new WOW().init();
        // прелоудер для сайта
        $('.svaistore').fadeOut(1000);
    });
})(jQuery);

