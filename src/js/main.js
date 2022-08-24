//page title
let firstName = "Łukasz";
let lastName = "Kuś";

document.title = `${firstName} ${lastName} - Recruitment task`;

//modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".btn--modal-open");
const closeBtn = document.querySelector(".modal__close-btn");
const showCounter = document.querySelector(".modal__counter");
const resetBtn = document.querySelector(".btn--reset");

const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
  clickCounter();
  showResetBtn();
};

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//click counter
const clickCounter = () => {
  if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 1;
  }
  showCounter.innerHTML = sessionStorage.clickcount + " times";
};

const showResetBtn = () => {
  if (sessionStorage.clickcount >= 5) {
    resetBtn.classList.remove("disabled");
  } else {
    resetBtn.classList.add("disabled");
  }
};

const resetCounter = () => {
  sessionStorage.clickcount = 0;
  showCounter.innerHTML = sessionStorage.clickcount + " times";
  resetBtn.classList.add("disabled");
};

resetBtn.addEventListener("click", resetCounter);
