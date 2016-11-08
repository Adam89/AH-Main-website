module.exports = slider;

function slider() {
    'use strict';

    var method = {};

    method.init = function() {

        method.sliderOpen();
    };


    method.sliderOpen = function() {

     
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        prevArrow: '.controllers .prev',
        nextArrow: '.controllers .next',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
};


  
    return method;

} 
