/** Counter implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

// Let's define our variables first:

// A global variable, for accesing the interval
let countdown;

// The two HTML DOM nodes for the countdown text and the countdown time
const $countdownText = document.querySelector('.countdown__text');
const $countdownTime = document.querySelector('.countdown__time');

// Let's start building our functions:

/**
 * Initialize the countdown, which should be updated in a one second interval
 */
function initializeCountdown() {
  countdown = setInterval(renderCountdown, 1000);
}

/**
 * Get the date for the upcoming event and the current date,
 * calculate the date difference and pass this difference
 * for creating the text strings for the HTML.
 */
function renderCountdown() {
  const currentDate = new Date();
  const nextEventDate = new Date('June 01 2016 19:00:00 GMT+0100 (CEST)');
  const dateDifference = new Date(nextEventDate - currentDate);

  getCountdownTimeString(dateDifference);
}

/**
 * Get the text strings for the countdown text and time.
 * @param {Date} date
 *    The date difference between the current date
 *    and the date of the upcoming event
 */
function getCountdownTimeString(date) {
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let countdownText, countdownTime;

  if (date.getTime() >= 0) {
    days = days < 2 ? `${days} day, ` : `${days} days, `;
    hours = hours < 2 ? `${hours} hour and ` : `${hours} hrs, `;
    minutes = minutes < 2 ? `${minutes} minute and` : `${minutes} min and `;
    seconds = seconds < 2 ? `${seconds} second` : `${seconds} sec`;
    countdownText = `Next Meeting:`;
    countdownTime = `${days}${hours}${minutes}${seconds}`;
  } else if (date.getTime() >= -10800000 && date.getTime() < 0) {
    countdownText = `This event is happening`;
    countdownTime = `right now!`
  } else {
    countdownText = `This event is`;
    countdownTime = `already over.`;
    clearInterval(countdown);
  }

  // Finally write the respective text strings to the HTML
  $countdownText.textContent = countdownText;
  $countdownTime.textContent = countdownTime;
}

// As soon as the scripts is fully loaded by the browser,
// this function should be immediately called for starting the countdown
initializeCountdown();
