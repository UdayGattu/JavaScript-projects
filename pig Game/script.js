'use strict';

// selecting elements
/*
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--roll');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//  starting elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const socres = [0, 0];

let currentScore = 0;
let activatePlayer = 0;

btnRoll.addEventListener('click', function () {
  //  generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //  click for rolled1 : if true switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activatePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activatePlayer}`).textContent = 0;
    currentScore = 0;
    activatePlayer = activatePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
*/
//  selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let activatePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let scores = [0, 0];
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activatePlayer}`).textContent = 0;
  currentScore = 0;
  activatePlayer = activatePlayer == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activatePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activatePlayer] += currentScore;
    document.getElementById(`score--${activatePlayer}`).textContent =
      scores[activatePlayer];

    if (scores[activatePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activatePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activatePlayer}`)
        .classList.remove('player--active');
    }
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#current--${i}`).textContent = 0;
  }
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = 0;
  }
  currentScore = 0;
  scores = [0, 0];
  activatePlayer = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  console.log(scores);
  console.log(score0El, score1El);
  console.log(currentScore0El, currentScore1El);
  playing = true;
});
