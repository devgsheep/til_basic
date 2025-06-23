// html의 태그구조를 모두 읽어들였다면 그때 찾아라.
// 아래 구문 외워야 하나요?
window.addEventListener("DOMContentLoaded", () => {
  // 상단 영역
  const headerTop = document.querySelector(".header_top");
  // 로고
  const logo = document.querySelector(".logo");
  // 제품검색
  const search = document.querySelector(".search");
  // 세일제품
  const sale = document.querySelector(".sale");
  // 링크 사이트 목록
  const linkSite = document.querySelector(".link_site");
  // 메인메뉴 a 태그들: 여러 개
  const mainMenuA = document.querySelectorAll(".main_menu li a");
  // 멤버 메뉴 a 태그들 : 여러 개
  const memberMenuA = document.querySelectorAll(".member_menu li a");

  //모바일 메뉴 참조
  const mobileHeader = this.document.querySelector(".mobile_header");

  // 웹브라우저의 스크롤을 체크하겠다.
  window.addEventListener("scroll", () => {
    // 스크롤바의 최상단
    const scY = window.scrollY;
    if (scY > 0) {
      // console.log("스크롤되었다.");
      headerTop.classList.add("header_top_scroll");
      logo.classList.add("logo_hide");
      sale.classList.add("sale_hide");
      search.classList.add("search_scroll");
      linkSite.classList.add("link_site_hide");
      // 메인메뉴 class 추가
      mainMenuA.forEach((item) => {
        item.classList.add("height_62");
      });
      // 회원메뉴 class 추가
      memberMenuA.forEach((item) => {
        item.classList.add("height_62");
      });

      mobileHeader.classList.add("mobile_scroll_line");
    } else {
      // console.log("스크롤 최상단!!!");
      headerTop.classList.remove("header_top_scroll");
      logo.classList.remove("logo_hide");
      sale.classList.remove("sale_hide");
      search.classList.remove("search_scroll");
      linkSite.classList.remove("link_site_hide");
      mainMenuA.forEach((item) => {
        item.classList.remove("height_62");
      });
      memberMenuA.forEach((item) => {
        item.classList.remove("height_62");
      });

      mobileHeader.classList.remove("mobile_scroll_line");
    }
  });
});

// const : 웹브라우저에 보관(불변/상수)
