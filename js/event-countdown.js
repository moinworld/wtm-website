/** Counter implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

// Let's define our variables first:

// A global variable, for accessing the interval
// The two HTML DOM nodes for the countdown text and the countdown time
/* let countdown; */

var countdown;
/*
const $countdownText = document.querySelector('.countdown__text');
const $countdownTime = document.querySelector('.countdown__time');
*/
var $countdownText = document.querySelector('.countdown__text');
var $countdownTime = document.querySelector('.countdown__time');

// Let's start building our functions:

/**
 * Initialize the countdown, which should be updated in a one second interval
 */
function initializeCountdown() {
  wtmMeetup.loadAllEvents(function(e) {
    if (wtmMeetup.getNextEvent()) {
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

  let countdownText, countdownTime;
*/
 /*    
    The parameter date is a day in the year 1970. This is because all date calculations in computer systems are done using so-called timestamps. 
    A timestamp is the number of milliseconds passed since 1/1/1970 00:00:000 (don't ask us why it's this date ;) )
    So when we calculate the difference between two dates - as we did in the function renderCountdown() above 
    - we are actually left with a timestamp.
    Example:
        Date 1: 20/8/2016 17:45:30 GMT
        Date 2: 22/8/2016 18:00:00 GMT
        Date 1 as timestamp: 1471715130
        Date 2 as timestanp: 1471888800
        
        Difference Date 2 - Date 1 in timestamp:  1471888800 - 1471715130 = 173670    
        
        The resulting timestamp 173670 in Date format is 3/1/1970 00:14:30 GMT.
        This value is saved inside our date variable. 
        When we call date.getDate() as below, we will get the date of the month, so 3.
        Since we are counting dates from 1 instead of 0, we have to substract 1 from that number to get the difference between Date 1 and Date 2.
*/
  var days = date.getDate() - 1;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var countdownText, countdownTime;
  
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

  setCountdownInfo(countdownText, countdownTime);
}

/**
 * sets the text in the page with the next Date information
 * @param countdoenText
 * @param countdownTime
 */
function setCountdownInfo(countdownText, countdownTime) {
  // Finally write the respective text strings to the HTML
  $countdownText.textContent = countdownText;
  $countdownTime.textContent = countdownTime;
}

// As soon as the scripts is fully loaded by the browser,
// this function should be immediately called for starting the countdown
initializeCountdown();
