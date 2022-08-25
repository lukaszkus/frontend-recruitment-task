//page title
let firstName = "Łukasz";
let lastName = "Kuś";

document.title = `${firstName} ${lastName} - Recruitment task`;

//modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".btn--modal-open");
const closeBtn = document.querySelector(".modal__close-btn");
const showClicks = document.querySelector(".modal__counter");
const resetBtn = document.querySelector(".btn--reset");
const showMsg = document.querySelector(".modal__message");

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
  showClicks.innerHTML = sessionStorage.clickcount + " times";
};

const message = {
  error:
    "You have reached the maximum capacity of our counter. Please click the reset button and start again.",
  succes: "Thank you. The counter has been reset.",
};

const showResetBtn = () => {
  if (sessionStorage.clickcount >= 5) {
    resetBtn.classList.remove("disabled");
    openBtn.classList.add("disabled-events");
    overlay.classList.add("disabled-events");
    closeBtn.classList.add("disabled-events", "opacity");
    showMsg.innerHTML = message.error;
  } else {
    resetBtn.classList.add("disabled");
    overlay.classList.remove("modal-disabled");
    closeBtn.classList.remove("modal-disabled");
    showMsg.innerHTML = "";
  }
};

const resetCounter = () => {
  sessionStorage.clickcount = 0;
  showClicks.innerHTML = sessionStorage.clickcount + " times";
  showMsg.innerHTML = message.succes;
  resetBtn.classList.add("disabled");
  overlay.classList.remove("disabled-events");
  closeBtn.classList.remove("disabled-events", "opacity");
  openBtn.classList.remove("disabled-events");
};

resetBtn.addEventListener("click", resetCounter);
