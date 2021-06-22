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
      slideBy: 3,
      autoplaySpeed: 1000,
      autoplayTimeout: 6000,
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

function initMap() {
   const uluru = { lat: 47.064778427055074, lng: 37.47879117489533 };
   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
   });
   const marker = new google.maps.Marker({
      position: new google.maps.LatLng(47.06719737730901, 37.478254733129816),
      icon: "img/marker_maps.png",
      map: map,
   });
}