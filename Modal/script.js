'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnshowModal = document.querySelectorAll('.show-modal');
// functions regarding to open modal
const clickShowModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// functions regarding to close modal
const clickCloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnshowModal.length; i++) {
  //  it to open the modal
  btnshowModal[i].addEventListener('click', clickShowModal);

  // it is to close modal using "X" button
  btnCloseModal.addEventListener('click', clickCloseModal);

  // it is to close modal using overlay option
  overlay.addEventListener('click', clickCloseModal);
}

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    clickCloseModal();
  }
});
