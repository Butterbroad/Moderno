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

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });

    $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
        
    
    var mixer = mixitup('.products__inner-box');

    
});