window.addEventListener("load", function () {
  //API 데이터
  const ticketApiData = [
    {
      카테고리: "뮤지컬",
      데이터: [
        {
          uid: 1,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25008376_p.gif",
          alt: "슬립노모어 포스터",
          순위: "1",
          제목: "〈슬립노모어 서울〉(Sleep No More Seoul)",
          장소: "매키탄 호텔 (The McKithan Hotel)",
          날짜: "2025.07.24 - 2025.08.09",
          옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
        {
          uid: 2,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
          alt: "맘마미아",
          순위: "2",
          제목: "뮤지컬〈맘마미아!〉",
          장소: "LG아트센터 서울 LG SIGNATURE 홀",
          날짜: "2025.07.26 - 2025.10.25",
          옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
        {
          uid: 3,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
          alt: "팬텀",
          순위: "3",
          제목: "뮤지컬〈팬텀〉10주년 기념 공연",
          장소: "세종문화회관 대극장",
          날짜: "2025.05.31 - 2025.08.11",
          옵션: [],
        },
        {
          uid: 4,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25005777_p.gif",
          alt: "위키드",
          순위: "4",
          제목: "뮤지컬〈위키드〉내한 공연(WICKED The Musical)",
          장소: "블루스퀘어 신한카드홀",
          날짜: "2025.07.12 - 2025.10.26",
          옵션: [{ 스타일: "blue", 텍스트: "좌석우위" }],
        },
        {
          uid: 5,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25008305_p.gif",
          alt: "스트라빈스키",
          순위: "5",
          제목: "뮤지컬 〈스트라빈스키〉",
          장소: "대학로 TOM(티오엠) 2관",
          날짜: "2025.07.28 - 2025.10.12",
          옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
        {
          uid: 6,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25008162_p.gif",
          alt: "마리쿼리",
          순위: "6",
          제목: "뮤지컬〈마리 퀴리〉",
          장소: "광림아트센터 BBCH홀",
          날짜: "2025.07.25 - 2025.10.19",
          옵션: [],
        },
        {
          uid: 7,
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25003119_p.gif",
          alt: "매디슨 카운티의 다리",
          순위: "7",
          제목: "뮤지컬〈매디슨 카운티의 다리〉",
          장소: "광림아트센터 BBCH홀",
          날짜: "2025.05.01 - 2025.07.13",
          옵션: [],
        },
      ],
    },
    {
      카테고리: "콘서트",
      데이터: [],
    },
    {
      카테고리: "스포츠",
      데이터: [],
    },
    {
      카테고리: "전시/행사",
      데이터: [],
    },
    {
      카테고리: "클래식/무용",
      데이터: [],
    },
    {
      카테고리: "아동/가족",
      데이터: [],
    },
    {
      카테고리: "연극",
      데이터: [],
    },
    {
      카테고리: "레저/캠핑",
      데이터: [],
    },
  ];

  // 카테고리 html 태그 만들기
  let btHtml = ``;
  for (let i = 0; i < ticketApiData.length; i++) {
    const tag = `<li><button>${ticketApiData[i].카테고리}</button></li>`;
    btHtml += tag;
  }

  // 카테고리 버튼 출력장소 및 출력하기
  const btPos = document.querySelector(".ticket_button_list");
  btPos.innerHTML = btHtml;

  // 포커스 스타일 추가하기
  // 아래 숫자가 포커스 된 카테고리의 순서이다.
  let focusIndex = 0;
  const btList = document.querySelectorAll(".ticket_button_list li button");
  // focusIndex 번호의 button 태그에 클래스 추가
  btList[focusIndex].classList.add("ticket_focus");
  //클릭 시 포커스 이동하기
  btList.forEach(function (item, index) {
    item.addEventListener("click", function () {
      focusIndex = index;
      btList[focusIndex].classList.add("ticket_focus");
      resetBts();
    });
  });
  //포커스 리셋 및 최종 포커스 적용하기
  function resetBts() {
    btList.forEach(function (item) {
      item.classList.remove("ticket_focus");
    });
    btList[focusIndex].classList.add("ticket_focus");
  }

  //html 태그 만들기
  let html = ``;

  // 실제 데이터 개수만큼 태그 만들어 배치하기
  html = ``;
  for (let i = 0; i < ticketApiData[focusIndex].데이터.length; i++) {
    // 임시 태그
    let tag = `
    <div class="swiper-slide">
      <a href=${ticketApiData[focusIndex].데이터[i].링크} class="ticket_slide_item">
        <div class="ticket_image">
          <img
            src=${ticketApiData[focusIndex].데이터[i].이미지}
            alt=${ticketApiData[focusIndex].데이터[i].alt}
          />
          <div class="ticket_rank">${ticketApiData[focusIndex].데이터[i].순위}</div>
        </div>
        <div class="ticket_item_info">
          <p class="ticket_item_name">
            ${ticketApiData[focusIndex].데이터[i].제목}
          </p>
          <p class="ticket_item_place">
            ${ticketApiData[focusIndex].데이터[i].장소}
          </p>
          <p class="ticket_item_date">${ticketApiData[focusIndex].데이터[i].날짜}</p>

          <div class="ticket_item_option">`;

    for (let j = 0; j < ticketApiData[focusIndex].데이터[i].옵션.length; j++) {
      tag += `<span class="ticket_item_${ticketApiData[focusIndex].데이터[i].옵션[j].스타일}">${ticketApiData[focusIndex].데이터[i].옵션[j].텍스트}</span>`;
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

  // 태그 출력 장소 저장하기
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  console.log("만들어진 태그 : ", html);
  ticketPos.innerHTML = html;

  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
  });
});
