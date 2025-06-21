const swiper = new Swiper('.swiper_inner', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  infinite: true,
  navigation: {
    nextEl: '.arrow_right',
    prevEl: '.arrow_left',
  },

  pagination: {
    el: '.dots',
    clickable: true
  },

  breakpoints: {
    800: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 3,
    }
  }


});
