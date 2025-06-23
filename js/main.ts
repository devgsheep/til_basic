window.addEventListener("DOMContentLoaded", (): void => {
  // main
  const main: Element | null = document.querySelector(".main");
  // 윈도우 스크롤 체크
  window.addEventListener("scroll", (): void => {
    const scY = window.scrollY;
    if (scY > 0) {
      main!.classList.add("main_scroll");
    } else {
      main!.classList.remove("main_scroll");
    }
  });
});
