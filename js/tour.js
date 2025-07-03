window.addEventListener("DOMContentLoaded", function () {
  // 1. 데이터 부르기
  let originData;

  async function getData() {
    try {
      const res = await fetch("/apis/tour.json");
      const result = await res.json();
      originData = result;
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }
  let showIndex = 0;
  // 2. html 태그 만들기
  function makeHtml() {
    let html = "";
    const showData = originData[showIndex].데이터;

    for (let i = 0; i < showData.length; i++) {
      const obj = showData[i];
      const tag = `
      <div class="swiper-slide">
          <a href="#" class="tour_item">
              <div class="tour_item_image">
                  <img
                  src="${obj.image}"
                  alt="${obj.alt}"
                  />
              </div>
              <div class="tour_item_info">
                  <p class="tour_city">${obj.city}</p>
                  <p class="tour_sale">${obj.sale}</p>
                  <p class="tour_item_title">${obj.title}</p>
                  <p class="tour_price"><b>${obj.price}</b>원~</p>
              </div>
          </a>
      </div>`;

      html = html + tag;
    }

    const where = document.querySelector(".sw_tour .swiper-wrapper");
    // 기존의 html 내용을 삭제한다.
    where.innerHTML = "";
    // 다시 새로운 내용을 채운다.
    where.innerHTML = html;

    makeSlide();
  }
  // 3. 슬라이드 만들기
  let swTour;

  function makeSlide() {
    if (swTour) {
      // 슬라이드가 이미 존재 한다면 지운다.
      swTour.destroy();
    }
    swTour = new Swiper(".sw_tour", {
      slidesPerView: 3,
      grid: {
        // 슬라이드 배치 방식, (정렬순서)
        // 슬라이드 2줄(행), 가로방향으로 먼저 채움이라는 뜻
        rows: 2,
        fill: "row"
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
  }

  // 4. 버튼 포커스 만들기
  const bts = document.querySelectorAll(".tour_button_list li button");
  // 포커스 되었을 때 적용될 포커스 이름

  function makeButton() {
    bts.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 모든 버튼에서 tour_focus 클래스 제거
        removeFocus();
        showIndex = index;
        // 클릭된 버튼은 tour_focus 클래스 추가
        item.classList.add("tour_focus");
        // json 을 다시 불러들인다.
        makeHtml();
      });
    });
  }
  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    bts.forEach(function (item) {
      item.classList.remove("tour_focus");
    });
  }

  getData("tour.json");
  makeButton();
});

// window.addEventListener("DOMContentLoaded", function () {
//   // 1. 데이터 부르기
//   const TOUR_DATA_JSON = [
//     "tour.json",
//     "tour.json",
//     "tour.json",
//     "tour.json",
//     "tour.json",
//   ];
//   async function getData(file) {
//     try {
//       const res = await fetch(`/apis/${file}`);
//       const result = await res.json();
//       makeHtml(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   // 2. html 태그 만들기
//   function makeHtml(data) {
//     let html = "";

//     for (let i = 0; i < data.length; i++) {
//       const obj = data[i];
//       const tag = `
//       <div class="swiper-slide">
//           <a href="#" class="tour_item">
//               <div class="tour_item_image">
//                   <img
//                   src="${obj.image}"
//                   alt="${obj.alt}"
//                   />
//               </div>
//               <div class="tour_item_info">
//                   <p class="tour_city">${obj.city}</p>
//                   <p class="tour_sale">${obj.sale}</p>
//                   <p class="tour_item_title">${obj.title}</p>
//                   <p class="tour_price"><b>${obj.price}</b>원~</p>
//               </div>
//           </a>
//       </div>`;

//       html = html + tag;
//     }

//     const where = document.querySelector(".sw_tour .swiper-wrapper");
//     // 기존의 html 내용을 삭제한다.
//     where.innerHTML = "";
//     // 다시 새로운 내용을 채운다.
//     where.innerHTML = html;

//     makeSlide();
//   }
//   // 3. 슬라이드 만들기
//   let swTour;

//   function makeSlide() {
//     if (swTour) {
//       // 슬라이드가 이미 존재한다면 지운다.
//       swTour.destroy();
//     }

//     swTour = new Swiper(".sw_tour", {
//       slidesPerView: 3,
//       grid: {
//         rows: 2,
//       },
//       spaceBetween: 10,
//       slidesPerGroup: 1,

//       navigation: {
//         nextEl: ".tour_slide_next",
//         prevEl: ".tour_slide_prev",
//       },

//       // 반응형
//       breakpoints: {
//         1024: {
//           slidesPerView: 2,
//           slidesPerGroup: 2,
//           spaceBetween: 26,
//           grid: {
//             rows: 1,
//             fill: "row",
//           },
//         },
//         1280: {
//           slidesPerView: 3,
//           slidesPerGroup: 3,
//           spaceBetween: 26,
//           grid: {
//             rows: 1,
//             fill: "row",
//           },
//         },
//       },
//     });
//   }

//   // 4. 버튼 포커스 만들기
//   const bts = document.querySelectorAll(".tour_button_list li button");
//   // 포커스 되었을 때 적용될 포커스 이름
//   const focusName = "tour_focus";

//   function makeButton() {
//     bts.forEach(function (item, index) {
//       item.addEventListener("click", function () {
//         // 모든 버튼에서 tour_focus 클래스 제거
//         removeFocus();
//         // 클릭된 버튼은 tour_focus 클래스 추가
//         item.classList.add(focusName);
//         // json 을 다시 불러들인다.
//         getData(TOUR_DATA_JSON[index]);
//       });
//     });
//   }
//   // 버튼에서 포커스 제거하는 기능
//   function removeFocus() {
//     bts.forEach(function (item) {
//       item.classList.remove(focusName);
//     });
//   }

//   getData(TOUR_DATA_JSON[0]);
//   makeButton();
// });
