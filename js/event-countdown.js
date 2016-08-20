/** Counter implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

// Let's define our variables first:

// A global variable, for accessing the interval
// The two HTML DOM nodes for the countdown text and the countdown time
/* let countdown; */
/* let eventName; */

var countdown;
var eventName;

/*
const $countdownText = document.querySelector('.countdown__text');
const $countdownName = document.querySelector('.countdown__name');
const $countdownTime = document.querySelector('.countdown__time');
*/
var $countdownText = document.querySelector('.countdown__text');
var $countdownName = document.querySelector('.countdown__name');
var $countdownTime = document.querySelector('.countdown__time');

// Let's start building our functions:

/**
 * Initialize the countdown, which should be updated in a one second interval
 */
function initializeCountdown() {
  wtmMeetup.loadAllEvents(function(e) {
    if (wtmMeetup.getNextEvent()) {
        // Get the next event's name
        eventName = wtmMeetup.getNextEvent().name;
        
        // Get the next event's date(timestamp)
        countdown = setInterval(renderCountdown, 1000, new Date(wtmMeetup.getNextEvent().time));
    } else {
      setCountdownInfo('No Events available', '');
    }
  });
}

/**
 * Get the date for the upcoming event and the current date,
 * calculate the date difference and pass this difference
 * for creating the text strings for the HTML.
 */
function renderCountdown(nextEventDate) {
/*
  const currentDate = new Date();
  const nextEventDate = new Date('June 01 2016 19:00:00 GMT+0100 (CEST)');
  const dateDifference = new Date(nextEventDate - currentDate);
*/
  var currentDate = new Date();
  var dateDifference = new Date(nextEventDate - currentDate);
  getCountdownTimeString(dateDifference);
}

/**
 * Get the text strings for the countdown text and time.
 * @param {Date} date
 *    The date difference between the current date
 *    and the date of the upcoming event
 */
function getCountdownTimeString(date) {
/*
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let countdownText, countdownName, countdownTime;
*/
  var days = date.getUTCDate(); // We need to get the current UTC time (Universal Time Coordinate or GMT - Greenwich Mean Time)
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var countdownText, countdownName, countdownTime;

  if (date.getTime() >= 0) {
    days = days < 2 ? `${days} day, ` : `${days} days, `;
    hours = hours < 2 ? `${hours} hour and ` : `${hours} hrs, `;
    minutes = minutes < 2 ? `${minutes} minute and ` : `${minutes} min and `;
    seconds = seconds < 2 ? `${seconds} second` : `${seconds} sec`;
    countdownText = `Next Event:`;
    countdownName = eventName;
    countdownTime = `${days}${hours}${minutes}${seconds}`;
  } else if (date.getTime() >= -10800000 && date.getTime() < 0) {
    countdownText = `The event`;
    countdownName = eventName;
    countdownTime = `is happening right now!`
  } else {
    countdownText = `The event`;
    countdownName = eventName;
    countdownTime = `is already over.`;
    clearInterval(countdown);
  }

  setCountdownInfo(countdownText, countdownName, countdownTime);
}

/**
 * sets the text in the page with the next Date information
 * @param countdoenText
 * @param countdownTime
 */
function setCountdownInfo(countdownText, countdownName, countdownTime) {
  // Finally write the respective text strings to the HTML
    $countdownText.textContent = countdownText;
    $countdownName.textContent = countdownName;
    $countdownTime.textContent = countdownTime;
}

// As soon as the scripts is fully loaded by the browser,
// this function should be immediately called for starting the countdown
initializeCountdown();