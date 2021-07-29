var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
    },
  },
});
