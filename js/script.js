$(document).ready(function () {
    'use strict';
    
    PageLoad();
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

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

function PageLoad() {

    $('body').removeClass('hidden');
    TweenMax.to($('.preloader-text'), 1, { force3D: true, opacity: 1, y: 0, delay: 0.2, ease: Power3.easeOut });

    var width = 100,
        perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime / 500) % 50) * 70;


    // Percentage Increment Animation
    var PercentageID = $('#precent'),
        start = 0,
        end = 100,
        durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);

        var timer = setInterval(function () {
            current += increment;
            $(obj).text(current);
            //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Fading Out Loadbar on Finised
    setTimeout(function () {
        TweenMax.to($('.percentage, .preloader-text'), 0.7, { force3D: true, opacity: 0, yPercent: -101, ease: Power3.easeInOut });
        TweenMax.to($('.preloader-wrap'), 0.7, { force3D: true, yPercent: -101, delay: 0.2, ease: Power3.easeInOut });
    }, time);



}// End Page Load	

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