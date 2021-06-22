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
      loop: true,
      dots: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 3,
            nav: false
         },
         1000: {
            items: 3,
            nav: true,

         }
      }
   })
});