//PreLoader*********************
$(window).on('load',function(){
    setTimeout(function(){
        $('.preloader').fadeOut('slow');
    },600);
});



$(document).ready(function(){
    $('body').scrollspy({target: ".navbar-nav", offset: 70});
    
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag:true,
    autoplay:true,
    autoplayTimeout:4000,
    dragEndSpeed:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
     }
   })
});
$('.sliderSlick').slick({
                        dots: true,
                        infinite: true,
                        speed: 300,
                        autoplay:true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });