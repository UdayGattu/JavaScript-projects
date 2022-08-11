'use strict';
/*
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModel = document.querySelector('.close-modal');

const btnShowModel = document.querySelectorAll('.show-modal');

console.log(btnShowModel);

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener('click', function () {
    // console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  btnCloseModel.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
*/
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);

  overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  btnCloseModal.addEventListener('click', closeModel);
}
