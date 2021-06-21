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