window.addEventListener("DOMContentLoaded", function () {
  // main
  const main = document.querySelector(".main");
  // 윈도우 스크롤 체크
  window.addEventListener("scroll", function () {
    const scY = window.scrollY;
    if (scY > 0) {
      main.classList.add("main_scroll");
    } else {
      main.classList.remove("main_scroll");
    }
  });
});
