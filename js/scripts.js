$(document).ready(function () {
   $('.about__slider').slick({
      pauseOnFocus: false,
      pauseOnHover: false,
      draggable: true,
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      loop: true,
   });
});
$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      mergeFit: false,

      dots: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: false
         },
         680: {
            items: 2,
         },
         1024: {
            items: 3,
         },
         1430: {
            nav: true,
         }
      }
   })
});