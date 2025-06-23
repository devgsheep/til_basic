window.addEventListener("DOMContentLoaded", () => {
  const closeBt = document.querySelector(".popup_close");
  const popup = document.querySelector(".popup");

  closeBt.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
