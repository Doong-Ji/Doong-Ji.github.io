var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  breakpoints: {
    // when window width is <= 499px
    1200: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    768: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
    },
  },
});

var reviewSwiper = new Swiper('.reviewSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  breakpoints: {
    // when window width is <= 499px
    1200: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    768: {
      slidesPerView: 1,
      spaceBetweenSlides: 100,
    },
  },
});
