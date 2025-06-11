window.addEventListener("load", function () {
  new Swiper(".sw_tour", {
    slidesPerView: 5,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".tour_slide_next",
      prevEl: ".tour_slide_prev",
    },

    // 반응형
    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 26,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 26,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
    },
  });
});
