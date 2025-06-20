window.addEventListener("DOMContentLoaded", function () {
  const closeBt = document.querySelector(".popup_close");
  const popup = document.querySelector(".popup");

  closeBt.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
