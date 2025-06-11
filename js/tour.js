window.addEventListener("load", function () {
  // 카테고리 버튼 클릭하면 포커스 클래스 이동하기
  //포커스 되었을 때 적용될 포커스 이름
  const focusName = "tour_focus";
  const bts = document.querySelectorAll(".tour_button_list li button");
  // 태그 등의 DOM 들을 모아둔 배열을 다룰 때 추천하는 반복 문법
  bts.forEach(function (item) {
    item.addEventListener("click", function () {
      // 모든 버튼에서 tour_focus 클래스 제거
      removeFocus();
      // 클릭된 버튼은 tour_focus 클래스 추가
      item.classList.add(focusName);
    });
  });

  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    bts.forEach(function (item) {
      item.classList.remove(focusName);
    });
  }

  // 슬라이드 태그 만들기
  const tourDataArr = [
    {
      id: 1,
      link: "#",
      city: "마카오",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/2bcd15b0-723d-47e2-96a2-848deb9e5d89",
      alt: "마카오",
      sale: "6월 할인 최저가",
      title: "마카오 하우스 오브 댄싱 워터 쇼 티켓",
      price: "120,000",
    },
    {
      id: 2,
      link: "#",
      city: "다낭/호이안",
      image:
        "http://tourimage.interpark.com/product/tour/00161/B10/500/B1016703_6_467.jpg",
      alt: "다낭/호이안",
      sale: "VIP 패스트트랙 제공",
      title:
        "다낭 자유여행 5/6일 신라모노그램,중식1회+망고빙수,패스트트랙+왕복픽업 포함",
      price: "609,000",
    },
    {
      id: 3,
      link: "#",
      city: "도쿄",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d086c8c5-652a-4c6c-87f8-f0ecd3ae7041",
      alt: "도쿄",
      sale: "단독 10% 할인",
      title: "[최저가] 도쿄 타워 전망대 입장권 (150m) 단독 할인",
      price: "13,399",
    },
    {
      id: 4,
      link: "#",
      city: "시드니",
      image:
        "https://media.triple.guide/triple-cms/c_fill,f_auto,h_450,w_580/7d4e0967-a6b5-47ae-92a8-9c5c1773b4a4.jpeg",
      alt: "시드니",
      sale: "노팁/노옵션",
      title: "[NO팁/NO옵션][품격] 시드니 완전일주 6일 &lt;전일정4성&gt;",
      price: "1,749,000",
    },
    {
      id: 5,
      link: "#",
      city: "강원",
      image:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1747962603/domstay/4c607300fc404181.jpg",
      alt: "강원",
      sale: "패밀리 스탠다드 + 웰컴드링크 2인 + 할인권",
      title: "소노벨 비발디파크 B , C",
      price: "126,000",
    },
    {
      id: 6,
      link: "#",
      city: "호놀룰루",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/18da9cff-8b9c-4fe8-bd20-405aef650a6b.jpeg",
      alt: "호놀룰루",
      sale: "5성급 인기호텔 15%쿠폰제공",
      title: "카라이 와이키키 비치 호텔",
      price: "476,500",
    },
    {
      id: 7,
      link: "#",
      city: "다낭",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e4bf929f-d808-4069-9508-b948d2d1d2fe.jpeg",
      alt: "다낭",
      sale: "2024년 오픈 5성급 풀빌라 리조트+10%쿠폰제공",
      title: "퓨전 리조트 앤 빌라스 다낭",
      price: "158,695",
    },
    {
      id: 8,
      link: "#",
      city: "오사카",
      image:
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/54840827-0d86-432d-9d67-70b09b9d1168.jpeg",
      alt: "오사카",
      sale: "도톤보리 2분거리 3성급호텔",
      title: "호텔 포르자 오사카 난바 도톤보리",
      price: "131,950",
    },
    {
      id: 9,
      link: "#",
      city: "전라",
      image:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1739769418/domstay/788e334c9cc14a72.png",
      alt: "전라",
      sale: "디럭스 더블",
      title: "신라스테이 여수 엑스포역",
      price: "90,000",
    },
  ];

  // 1. 슬라이드 태그를 어디에 배치할 것인가?
  const swTourPos = this.document.querySelector(".sw_tour .swiper-wrapper");
  let htmlTag = "";

  for (let i = 0; i < tourDataArr.length; i++) {
    const tag = `
    <div class="swiper-slide">
        <a href="#" class="tour_item">
          <div class="tour_item_image">
            <img
            src="${tourDataArr[i].image}"
            alt="${tourDataArr[i].alt}"
            />
          </div>
          <div class="tour_item_info">
            <p class="tour_city">${tourDataArr[i].city}</p>
            <p class="tour_sale">${tourDataArr[i].sale}</p>
            <p class="tour_item_title">
            ${tourDataArr[i].title}
            </p>
            <p class="tour_price"><b>${tourDataArr[i].price}</b>원~</p>
          </div>
        </a>
      </div>
      `;

    htmlTag = htmlTag + tag;
  }

  swTourPos.innerHTML = htmlTag;

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
