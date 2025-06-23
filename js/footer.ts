window.addEventListener("DOMContentLoaded", (): void => {
  // 버튼 클릭시 내용 보이고, 숨기기 토글(반복)
  let isOpen = false; // true
  // 아이디 요소를 보관
  const mbBt: Element | null = document.querySelector("#mb_bt");
  // 보이고 숨겨지는 대상
  const hideTarget: NodeListOf<HTMLDivElement | HTMLUListElement> =
    document.querySelectorAll(".mb_footer_hide");
  // 아이콘 이미지
  const arrowImg: Element | null = document.querySelector("#mb_bt i img");
  // 버튼 클릭 확인 코드
  mbBt!.addEventListener("click", (): void => {
    // if (isOpen === true) {
    //   isOpen = false;
    // } else {
    //   isOpen = true;
    // }

    // isOpen = isOpen ? false : true;

    isOpen = !isOpen;
    showHideMenu();
  });

  // resize : 웹브라우저 너비
  window.addEventListener("resize", (): void => {
    // 웹브라우저 너비가 1024보다 큰지 작은지
    const winW: number = window.outerWidth;

    if (winW >= 1024) {
      isOpen = false;
      showHideMenu();
    }
  });

  // 모바일 메뉴 관련 함수
  function showHideMenu(): void {
    if (isOpen) {
      //펼치기
      arrowImg!.classList.add("img-up");
      for (let item of hideTarget) {
        item.classList.add("mb_footer_show");
      }
    } else {
      //닫기
      arrowImg!.classList.remove("img-up");
      for (let item of hideTarget) {
        item.classList.remove("mb_footer_show");
      }
    }
  }
});
