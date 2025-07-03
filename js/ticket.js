// HTML이 완성되면
window.addEventListener("DOMContentLoaded", function () {
  // 1. 백엔드 데이터 가져오기 : 1번만 실행
  let originData;

  async function getData() {
    try {
      const res = await fetch("/apis/ticket.json");
      const result = await res.json();
      // 전역에서 사용하도록 보관함.
      originData = result;
      makeCategoryHtml();
      makeSlideHtml();
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 생성
  // 2.1. 카테고리 버튼 생성
  function makeCategoryHtml() {
    let cateHtml = "";
    for (let i = 0; i < originData.length; i++) {
      const obj = originData[i];
      // console.log(obj.카테고리); 1. 카테고리 나오는지 확인 이후 아래 진행
      const tag = `<li><button>${obj.카테고리}</button></li>`;
      // console.log(tag); 2. html이 붙어져서 나오는지 확인 후 아래 진행
      cateHtml = cateHtml + tag;
    }

    const where = document.querySelector(".ticket_button_list");
    where.innerHTML = cateHtml;

    makeBtnInit();
  }
  // 2.2. 슬라이드 html 태그 생성
  let showIndex = 0; // 보여주어야 할 배열의 인덱스 보관
  function makeSlideHtml() {
    let html = "";

    // 현재 배열의 몇번째 데이터를 보여주어야 하는가?
    const showData = originData[showIndex].데이터;
    for (let i = 0; i < showData.length; i++) {
      const obj = showData[i];

      // 임시 태그
      let tag = `
    <div class="swiper-slide">
      <a href="${obj.링크}" class="ticket_slide_item">
        <div class="ticket_image">
          <img
            src="${obj.이미지}"
            alt="${obj.alt}"
          />
          <div class="ticket_rank">${obj.순위}</div>
        </div>

        <div class="ticket_item_info">
          <p class="ticket_item_name">
            ${obj.제목}
          </p>
          <p class="ticket_item_place">
            ${obj.장소}
          </p>
          <p class="ticket_item_date">${obj.날짜}</p>
          <div class="ticket_item_option">`;

      // console.log(obj.옵션.length);
      for (let j = 0; j < obj.옵션.length; j++) {
        tag =
          tag +
          `<span class="ticket_item_${obj.옵션[j].스타일}">${obj.옵션[j].텍스트}</span>`;
      }

      tag =
        tag +
        `</div>
        </div>
      </a>
    </div> 
    `;

      html = html + tag;
    }
    // 전체보기
    html += `
      <div class="swiper-slide">
        <li class="poster_all">
          <a href="#">
              <img src="images/btn_moreProduct.31dedf7e.svg" alt="" />
            <span>전체보기</span>
          </a>
        </ㅣ>
      </div>`;

    const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
    ticketPos.innerHTML = html;

    // const where = document.querySelector(".sw_ticket .swiper-wrapper");
    // where.innerHTML = html;

    // makeBtnFocus();
    makeSlide();
  }
  // 3. Swiper를 만들기

  let swiperTicket;
  function makeSlide() {
    if (swiperTicket) {
      swiperTicket.destroy();
    }
    // swiper 만들기 실행
    swiperTicket = new Swiper(".sw_ticket", {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".ticket_slide_next",
        prevEl: ".ticket_slide_prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
  // 4. 카테고리 버튼 선택시 다시 슬라이드 html 태그 생성
  //    2.2. 과정, 3 과정을 다시 진행

  // 5. 버튼 포커스 기능
  // 기능은 1번만 등록하기
  function makeBtnInit() {
    const btList = document.querySelectorAll(".ticket_button_list li button");
    btList[showIndex].classList.add("ticket_focus");
    btList.forEach(function (item, index) {
      item.addEventListener("click", function () {
        resetFocus();
        showIndex = index;
        item.classList.add("ticket_focus");
        makeSlideHtml();
      });
    });
  }

  function makeBtnFocus() {
    resetFocus();
    const btList = document.querySelectorAll(".ticket_button_list li button");
    btList[showIndex].classList.add("ticket_focus");
    btList.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 모든 포커스 제거
        resetFocus();
        // 데이터 보여줄 번호 변경
        showIndex = index;
        // 슬라이드 html 새로 만들고, Swiper 다시 만들고, 포커스 다시 만들기
        makeSlideHtml();
      });
    });
  }

  // 6. 포커스 해제 기능
  function resetFocus() {
    const btList = document.querySelectorAll(".ticket_button_list li button");
    btList.forEach(function (item) {
      item.classList.remove("ticket_focus");
    });
  }

  getData();
});

// window.addEventListener("load", function () {
//   //API 데이터
//   const ticketApiData = [
//     {
//       카테고리: "뮤지컬",
//       데이터: [
//         {
//           uid: 1,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/25/25008376_p.gif",
//           alt: "슬립노모어 포스터",
//           순위: "1",
//           제목: "〈슬립노모어 서울〉(Sleep No More Seoul)",
//           장소: "매키탄 호텔 (The McKithan Hotel)",
//           날짜: "2025.07.24 - 2025.08.09",
//           옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
//         },
//         {
//           uid: 2,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
//           alt: "맘마미아",
//           순위: "2",
//           제목: "뮤지컬〈맘마미아!〉",
//           장소: "LG아트센터 서울 LG SIGNATURE 홀",
//           날짜: "2025.07.26 - 2025.10.25",
//           옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
//         },
//         {
//           uid: 3,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
//           alt: "팬텀",
//           순위: "3",
//           제목: "뮤지컬〈팬텀〉10주년 기념 공연",
//           장소: "세종문화회관 대극장",
//           날짜: "2025.05.31 - 2025.08.11",
//           옵션: [],
//         },
//         {
//           uid: 4,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/25/25005777_p.gif",
//           alt: "위키드",
//           순위: "4",
//           제목: "뮤지컬〈위키드〉내한 공연(WICKED The Musical)",
//           장소: "블루스퀘어 신한카드홀",
//           날짜: "2025.07.12 - 2025.10.26",
//           옵션: [{ 스타일: "blue", 텍스트: "좌석우위" }],
//         },
//         {
//           uid: 5,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/25/25008305_p.gif",
//           alt: "스트라빈스키",
//           순위: "5",
//           제목: "뮤지컬 〈스트라빈스키〉",
//           장소: "대학로 TOM(티오엠) 2관",
//           날짜: "2025.07.28 - 2025.10.12",
//           옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
//         },
//         {
//           uid: 6,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/25/25008162_p.gif",
//           alt: "마리쿼리",
//           순위: "6",
//           제목: "뮤지컬〈마리 퀴리〉",
//           장소: "광림아트센터 BBCH홀",
//           날짜: "2025.07.25 - 2025.10.19",
//           옵션: [],
//         },
//         {
//           uid: 7,
//           링크: "#",
//           이미지:
//             "https://ticketimage.interpark.com/Play/image/large/25/25003119_p.gif",
//           alt: "매디슨 카운티의 다리",
//           순위: "7",
//           제목: "뮤지컬〈매디슨 카운티의 다리〉",
//           장소: "광림아트센터 BBCH홀",
//           날짜: "2025.05.01 - 2025.07.13",
//           옵션: [],
//         },
//       ],
//     },
//     {
//       카테고리: "콘서트",
//       데이터: [],
//     },
//     {
//       카테고리: "스포츠",
//       데이터: [],
//     },
//     {
//       카테고리: "전시/행사",
//       데이터: [],
//     },
//     {
//       카테고리: "클래식/무용",
//       데이터: [],
//     },
//     {
//       카테고리: "아동/가족",
//       데이터: [],
//     },
//     {
//       카테고리: "연극",
//       데이터: [],
//     },
//     {
//       카테고리: "레저/캠핑",
//       데이터: [],
//     },
//   ];

//   // 카테고리 html 태그 만들기
//   let btHtml = ``;
//   for (let i = 0; i < ticketApiData.length; i++) {
//     const tag = `<li><button>${ticketApiData[i].카테고리}</button></li>`;
//     btHtml += tag;
//   }

//   // 카테고리 버튼 출력장소 및 출력하기
//   const btPos = document.querySelector(".ticket_button_list");
//   btPos.innerHTML = btHtml;

//   // 포커스 스타일 추가하기
//   // 아래 숫자가 포커스 된 카테고리의 순서이다.
//   let focusIndex = 0;
//   const btList = document.querySelectorAll(".ticket_button_list li button");
//   // focusIndex 번호의 button 태그에 클래스 추가
//   btList[focusIndex].classList.add("ticket_focus");
//   //클릭 시 포커스 이동하기
//   btList.forEach(function (item, index) {
//     item.addEventListener("click", function () {
//       focusIndex = index;
//       btList[focusIndex].classList.add("ticket_focus");
//       resetBts();
//     });
//   });
//   //포커스 리셋 및 최종 포커스 적용하기
//   function resetBts() {
//     btList.forEach(function (item) {
//       item.classList.remove("ticket_focus");
//     });
//     btList[focusIndex].classList.add("ticket_focus");
//   }

//   //html 태그 만들기
//   let html = ``;

//   // 실제 데이터 개수만큼 태그 만들어 배치하기
//   html = ``;
//   for (let i = 0; i < ticketApiData[focusIndex].데이터.length; i++) {
//     // 임시 태그
//     let tag = `
//     <div class="swiper-slide">
//       <a href=${ticketApiData[focusIndex].데이터[i].링크} class="ticket_slide_item">
//         <div class="ticket_image">
//           <img
//             src=${ticketApiData[focusIndex].데이터[i].이미지}
//             alt=${ticketApiData[focusIndex].데이터[i].alt}
//           />
//           <div class="ticket_rank">${ticketApiData[focusIndex].데이터[i].순위}</div>
//         </div>
//         <div class="ticket_item_info">
//           <p class="ticket_item_name">
//             ${ticketApiData[focusIndex].데이터[i].제목}
//           </p>
//           <p class="ticket_item_place">
//             ${ticketApiData[focusIndex].데이터[i].장소}
//           </p>
//           <p class="ticket_item_date">${ticketApiData[focusIndex].데이터[i].날짜}</p>

//           <div class="ticket_item_option">`;

//     for (let j = 0; j < ticketApiData[focusIndex].데이터[i].옵션.length; j++) {
//       tag += `<span class="ticket_item_${ticketApiData[focusIndex].데이터[i].옵션[j].스타일}">${ticketApiData[focusIndex].데이터[i].옵션[j].텍스트}</span>`;
//     }
//     tag =
//       tag +
//       `</div>
//       </div>
//       </a>
//     </div>
//     `;

//     html = html + tag;
//   }

//   // 태그 출력 장소 저장하기
//   const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
//   // console.log("만들어진 태그 : ", html);
//   ticketPos.innerHTML = html;

//   new Swiper(".sw_ticket", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     slidesPerGroup: 1,

//     navigation: {
//       nextEl: ".ticket_slide_next",
//       prevEl: ".ticket_slide_prev",
//     },

//     breakpoints: {
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//         slidesPerGroup: 3,
//       },
//       1280: {
//         slidesPerView: 4,
//         spaceBetween: 20,
//         slidesPerGroup: 4,
//       },
//     },
//   });
// });
