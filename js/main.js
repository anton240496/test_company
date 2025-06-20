const swiper = new Swiper('.swiper_inner', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  infinite: true,
  navigation: {
    nextEl: '.arrow_right',
    prevEl: '.arrow_left',
  },

  pagination: {
    el: '.dots',
    clickable: true
  },

});