'use strict'

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

console.log(daysEl);
console.log(hoursEl);
console.log(minutesEl);
console.log(secondsEl);

const twoDays = 2 * 24 * 60 * 60 * 1000;
const targetTime = Date.now() + twoDays;

let timer;

function updateTimer() {
    const remainingTime = targetTime - Date.now();

      if (remainingTime <= 0) {
    clearInterval(timer);

    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';

    return;
    }
    
      const days = Math.floor(
    remainingTime / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) /
      (1000 * 60)
  );

  const seconds = Math.floor(
    (remainingTime % (1000 * 60)) /
      1000
  );
    
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

export default function startTimer() {
    updateTimer();

    timer = setInterval(updateTimer, 1000);
}