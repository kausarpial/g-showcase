(function ($) {
    'use strict';
    
    // -----------------------------
    //  Headroom Initialize
    // -----------------------------
    $('.main-nav').headroom();
    
    // -----------------------------
    //  AOS Initialize
    // -----------------------------
    AOS.init();

    // Testimonial Slider
    $('.testimonial-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    // Smooth Scroll to Section
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 60)
        }, 700);
        event.preventDefault();
    });

    $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.main-nav').addClass('nav-bg');
        } else {
            $('.main-nav').removeClass('nav-bg');
        }
    });

})(jQuery);