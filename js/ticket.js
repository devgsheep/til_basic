window.addEventListener("load", function () {
  // swiper 만들기 실행

  //json 데이터
  const ticketApiData = [
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25008376_p.gif",
      alt: "슬립노모어 포스터",
      순위: "1",
      제목: "〈슬립노모어 서울〉(Sleep No More Seoul)",
      장소: "매키탄 호텔 (The McKithan Hotel)",
      날짜: "2025.07.24 - 2025.08.09",
      옵션: ["단독판매", "좌석우위"],
    },
  ];

  //어디에 html 배치할것인지
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  let html = `
                  <div class="swiper-slide">
                    <a href=${ticketApiData[0].링크} class="ticket_slide_item">
                      <div class="ticket_image">
                        <img
                          src=${ticketApiData[0].이미지}
                          alt=${ticketApiData[0].alt}
                        />
                        <div class="ticket_rank">${ticketApiData[0].순위}</div>
                      </div>
                      <div class="ticket_item_info">
                        <p class="ticket_item_name">
                          ${ticketApiData[0].제목}
                        </p>
                        <p class="ticket_item_place">
                          ${ticketApiData[0].장소}
                        </p>
                        <p class="ticket_item_date">${ticketApiData[0].날짜}</p>
                        <div class="ticket_item_option">
                          <span class="ticket_item_red">${ticketApiData[0].옵션[0]}</span>
                          <span class="ticket_item_blue">${ticketApiData[0].옵션[1]}</span>
                        </div>
                      </div>
                    </a>
                  </div>
`;

  ticketPos.innerHTML = html;

  //포커스 되었을 때 적용될 포커스 이름
  const focusName = "ticket_focus";
  const bts = document.querySelectorAll(".ticket_button_list li button");
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
