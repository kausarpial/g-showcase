$(document).ready(function () {
    'use strict';
    smoothScroll()
    // -----------------------------
    //  Headroom Initialize
    // -----------------------------
    $('.main-nav').headroom();
    
    // Testimonial Slider
    $('.testimonial-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    });
    
    $('.about-item').matchHeight({
        byRow: 0
    });

    // Smooth Scroll to Section
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 60)
        }, 700);
        event.preventDefault();
    });
    
    // -----------------------------
    //  Parallax Scene
    // -----------------------------
    var scene = $('#icons').get(0);
    var parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.2, 0.2);

    var scene2 = $('#audienceIcons').get(0);
    var parallaxInstance2 = new Parallax(scene2);
    parallaxInstance2.friction(0.2, 0.2);

    // -----------------------------
    //  AOS Initialize
    // -----------------------------
    AOS.init();
});

$(window).on('scroll', function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.main-nav').addClass('nav-bg');
    } else {
        $('.main-nav').removeClass('nav-bg');
    }
});

// -----------------------------
// Smmoth Scroll
// -----------------------------
function smoothScroll() {
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1500);
        event.preventDefault();
    });
}