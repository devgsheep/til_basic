window.addEventListener("DOMContentLoaded", function () {
  // 1단계. 데이터를 부르자
  async function getData() {
    try {
      const res = await fetch("/apis/banner.json");
      // const res = await fetch("https://nol.interpark.com/api/liveProduct");
      const result = await res.json();
      // 2번 진행 시작
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // 2단계. html 태그 만들기
  function makeHtml(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const tag = `<div class="swiper-slide">
            <a href="${obj.link}" class="banner_slide_item">
                <img src="${obj.image}" alt="${obj.alt}" />
            </a>
        </div>`;

      html = html + tag;
    }

    // 실제 html 태그에 배치하기
    const bannerItem = document.querySelector(".sw_banner .swiper-wrapper");
    bannerItem.innerHTML = html;

    // 3단계. 슬라이드 만들기
    makeSlide();
  }

  // 3. 슬라이드
  function makeSlide() {
    const swiper = new Swiper(".sw_banner", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pg",
        clickable: true,
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
    // 마우스 인터렉션
    const banner = document.querySelector(".sw_banner");

    // 배너 영역에 마우스가 걸친다면
    banner.addEventListener("mouseenter", () => {
      swiper.autoplay.stop();
    });
    // 배너 영역에 마우스가 빠져나간다면
    banner.addEventListener("mouseleave", () => {
      swiper.autoplay.start();
    });
  }

  // 실행하기
  getData();
});

// window.addEventListener("DOMContentLoaded", () => {
//   // 백엔드 banner.json 파일을 불러옴
//   async function getBanner() {
//     try {
//       const res = await fetch("/apis/banner.json");
//       if (res.ok) {
//         const data = await res.json();
//         parseJsonData(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function parseJsonData(data) {
//     console.log(data);
//   }

//   const apiData = getBanner();
//   console.log(apiData);

//   // 슬라이드 개수
//   const total = apiData.length;

//   // 슬라이드 배치 장소
//   const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");

//   // 아래 코드는 별도로 작성을 한 것입니다. (보관 권장)
//   const banner = document.querySelector(".sw_banner");

//   // html 태그 만들기
//   // 6개 만들기
//   let htmlTag = "";

//   // html 태그 만드는 기능
//   function makeHtml() {
//     for (let i = 0; i < total; i++) {
//       htmlTag =
//         htmlTag +
//         `<div class="swiper-slide">
//     <a href="${apiData[i].link}" class="banner_slide_item">
//       <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
//     </a>
//   </div>
//     `;
//     }
//     // html 장소에 배치하기
//     bannerPos.innerHTML = htmlTag;
//   }

//   // console.log(htmlTag);

//   // 슬라이드 만들기
//   function makeSlide() {
//     const swiper = new Swiper(".sw_banner", {
//       slidesPerView: 1,
//       spaceBetween: 25,
//       loop: true,
//       speed: 1000,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".banner_slide_next",
//         prevEl: ".banner_slide_prev",
//       },
//       pagination: {
//         el: ".banner_slide_pg",
//         clickable: true,
//       },
//       breakpoints: {
//         760: {
//           slidesPerView: 2,
//           spaceBetween: 25,
//         },
//       },
//     });
//     return swiper;
//   }

//   makeHtml();
//   const swiper = makeSlide();

//   // 배너 영역에 마우스가 걸친다면
//   banner.addEventListener("mouseenter", () => {
//     // swiper 자동재생 off
//     swiper.autoplay.stop();
//   });
//   // 배너 영역에 마우스가 빠져나간다면
//   banner.addEventListener("mouseleave", () => {
//     // swiper 자동재생 on
//     swiper.autoplay.start();
//   });
// });
