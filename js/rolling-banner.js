// 파일 로딩 완료 시 실행
window.addEventListener("load", function () {
  //배너 데이터
  const bannerApiData = [
    { uid: 1, link: "#", image: "images/rolling/b1.png", title: "배너1" },
    { uid: 2, link: "#", image: "images/rolling/b2.png", title: "배너2" },
    { uid: 3, link: "#", image: "images/rolling/b3.png", title: "배너3" },
    { uid: 4, link: "#", image: "images/rolling/b4.png", title: "배너4" },
  ];
  // html 태그의 속성의 값 바꾸기
  // html 선택하기
  const bannerAnchorTag = document.querySelector(".sale");
  const bannerImgTag = document.querySelector(".sale img");
  // 롤링 작동하기
  //   console.log("링크주소 : ", bannerAnchorTag.href);
  //   console.log("이미지주소 : ", bannerImgTag.src);
  bannerAnchorTag.href = bannerApiData[0].link;
  bannerImgTag.src = bannerApiData[0].image;
  bannerImgTag.alt = bannerApiData[0].title;

  // 알고리즘
  let startIndex = 0;
  let totalCount = bannerApiData.length;

  // 타이머 만들기, 1초마다 (마우스커서로 제어하지 않을때는 let bannerTimer 삭제)
  let bannerTimer = setInterval(function () {
    startIndex += 1;
    if (startIndex >= totalCount) {
      startIndex = 0;
    }
    bannerAnchorTag.href = bannerApiData[startIndex].link;
    bannerImgTag.src = bannerApiData[startIndex].image;
    bannerImgTag.alt = bannerApiData[startIndex].title;
  }, 1000);

  // 마우스 커서 배너 제어하기
  bannerAnchorTag.addEventListener("mouseenter", function () {
    // 배너 타이머 지우기
    clearInterval(bannerTimer);
  });
  bannerAnchorTag.addEventListener("mouseleave", function () {
    // 배너 타이머 다시 실행
    bannerTimer = setInterval(function () {
      startIndex = startIndex + 1;
      if (startIndex >= totalCount) {
        startIndex = 0;
      }
      bannerAnchorTag.href = bannerApiData[startIndex].link;
      bannerImgTag.src = bannerApiData[startIndex].image;
      bannerImgTag.alt = bannerApiData[startIndex].title;
    }, 1000);
  });
});
