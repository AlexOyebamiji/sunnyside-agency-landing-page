"use strict";

const hamEl = document.querySelector(".ham");
const modalEl = document.querySelector(".display-modal");

const displayModal = () => {
  modalEl.classList.remove("display-modal");
};

const hideModal = (e) => {
  if (e.key === "Escape") {
    modalEl.classList.add("display-modal");
  }
};

hamEl.addEventListener("click", displayModal);
document.addEventListener("keydown", hideModal);
