//page title
let firstName = "Łukasz";
let lastName = "Kuś";

document.title = `${firstName} ${lastName} - Recruitment task`;

//modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalOpen = document.querySelector(".btn--modal-open");
const modalClose = document.querySelector(".modal__close-btn");

modalOpen.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
