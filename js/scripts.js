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

const windowHeight = window.innerHeight;
window.addEventListener('resize', function () {
   windowHeight = window.innerHeight;
})

function upWindow() {
   let upBtn = document.getElementById('up');
   window.addEventListener('scroll', function () {
      if (windowHeight < window.scrollY) {
         upBtn.classList.add('up__active')
      }
      else {
         upBtn.classList.remove('up__active')
      }
   })
   upBtn.addEventListener('click', function () {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   })
}
upWindow();
const headerHeight = document.getElementById('header').clientHeight;
function headerLinksActive() {
   for (let link of document.getElementsByClassName('nav__a')) {
      link.addEventListener('click', function (e) {
         e.preventDefault();
         let idSection = this.getAttribute('href');
         window.scrollTo({
            top: document.querySelector(idSection).offsetTop - headerHeight,
            left: 0,
            behavior: 'smooth',
         })
      })
   }
   for (let link of document.getElementsByClassName('nav__a')) {
      let sectionId = link.getAttribute('href');
      window.addEventListener('scroll', function (e) {
         let pos = document.querySelector(sectionId).getBoundingClientRect();
         if (pos.top < windowHeight / 2 && pos.top > - 1 * (pos.height - windowHeight / 2)) {
            link.firstElementChild.classList.add('nav__circle_active')
         } else {
            link.firstElementChild.classList.remove('nav__circle_active')
         }
      })
   }
}
headerLinksActive();

function aboutScrollDown() {
   document.getElementById('about__scrollDown').addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
         top: document.getElementById('projects').offsetTop - headerHeight,
         left: 0,
         behavior: 'smooth',
      })
   })
}
aboutScrollDown();

function headerHidden() {
   let posWindow = []
   window.addEventListener('scroll', function (e) {
      let pos = document.getElementById('about').getBoundingClientRect();
      posWindow.push(pos.y)
      if (posWindow[posWindow.length - 1] > posWindow[posWindow.length - 2]) {
         document.querySelector('.header').classList.remove('hidden')
      } else if (posWindow[posWindow.length - 1] < posWindow[posWindow.length - 2]) {
         document.querySelector('.header').classList.add('hidden')
      }
   })
}
headerHidden();

