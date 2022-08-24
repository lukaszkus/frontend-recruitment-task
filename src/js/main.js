//page title
let firstName = "Łukasz";
let lastName = "Kuś";

document.title = `${firstName} ${lastName} - Recruitment task`;

//modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".btn--modal-open");
const closeBtn = document.querySelector(".modal__close-btn");

const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
  clickCounter();
  addResetBtn();
};

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//click counter
const showClicks = document.querySelector(".modal__counter");
let message = document.querySelector(".modal__message");

const clickCounter = () => {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
      console.log(localStorage.clickcount);
    } else {
      localStorage.clickcount = 1;
    }
    showClicks.innerHTML = localStorage.clickcount + " times";
  } else {
    message.innerHTML = "Sorry, your browser does not support web storage...";
  }
};

const modalBody = document.querySelector(".modal__body");
const resetBtn = document.createElement("button");
resetBtn.classList.add("btn", "btn--counter-reset");
resetBtn.textContent = "Reset counter";

const addResetBtn = () => {
  localStorage.clickcount >= 5 ? modalBody.appendChild(resetBtn) : null;
  console.log("reset button added");
  return resetBtn.addEventListener("click", resetCounter);
};

const resetCounter = () => {
  localStorage.clickcount = 0;
  console.log(`reset - counter is now ${localStorage.clickcount}`);
  return (showClicks.innerHTML = localStorage.clickcount + " times");
};
