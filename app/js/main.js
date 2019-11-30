$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

    $('.product-slider__inner').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        hide_min_max: true,
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.content-items').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active')
    });
    $('.icon-th-large').on('click', function(){
        $('.content-items').removeClass('list');
        $('.icon-th-list').removeClass('active');
        $('.icon-th-large').addClass('active')
    });

    
    var mixer = mixitup('.products__inner-box');

    
});