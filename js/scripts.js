"use strict";

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
   const map = L.map('map', {
      center: [47.02787400626181, 37.481122419018796],
      zoom: 12,
      scrollWheelZoom: false
   });

   let customIcon = L.icon({
      iconUrl: 'img/marker_maps.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
   });
   L.marker([47.06731466591667, 37.47845833491723], { icon: customIcon }).addTo(map);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
}
initMap();