function WTMMeetup() {
  this.events;
  this.callback;
  this.script;
}

WTMMeetup.prototype.loadAllEvents = function (callback) {
  this.callback = callback;
  // Use JSONP request to escape the CORS
  this.script = document.createElement('script');
  this.script.src = 'https://api.meetup.com/womentechmakershamburg/events?callback=wtmMeetup.setEvents';
  document.querySelector('head').appendChild(this.script);
};

WTMMeetup.prototype.setEvents = function (response) {
  this.events = response.data;
  this.script.parentNode.removeChild(this.script);
  this.callback();
};

WTMMeetup.prototype.getNextEvent = function () {
  return this.events ? this.events[0] : null;
};

var wtmMeetup = new WTMMeetup();