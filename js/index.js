// I'm going to define a class to handle our timer functions.
// This will help keep our logic in one place, and keep the REST
// of our code from becoming too "verbose".
class Timer {
  /**
   * Make a new timer object.
   * @param {string} type The type of timer to build initially.
   * @returns {Object}
   */
  constructor(type = "pomodoro") {
    this.timerElement = document.getElementById(type);
    this.clock = document.getElementById("time");
    this.actionElement = document.getElementById("action");
    this.timer = this.timerElement.value;
    this.text = this.timer <= 9 ? `0${this.timer}` : `${this.timer}`;
  }

  /**
   * Reset the timer with it's current settings.
   */
  reset() {
    this.stop();
    this.timer = this.timerElement.value;
    this.text = this.timer <= 9 ? `0${this.timer}` : `${this.timer}`;
    this.actionElement.innerText = "start";
    this.clock.innerText = `${this.text}:00`;
  }

  /**
   * Select a timer type.
   * @param {string} type
   */
  select(type) {
    this.timerElement = document.getElementById(type);
    this.reset();
  }

  /**
   * Start running the timer
   */
  start() {
    // Set the start time
    this.timer = this.timerElement.value * 60;
    let minutes = 0;
    let seconds = 0;
    // start an interval of 1 second to track time
    this.interval = setInterval(() => {
      minutes = parseInt(this.timer / 60, 10);
      seconds = parseInt(this.timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Set the clock display.
      this.clock.innerText = minutes + ":" + seconds;

      // Clear the interval when we're done!
      if (--this.timer < 0) {
        this.timer = 0;
        clearInterval(this.interval);
        this.actionElement.innerText = "reset";
      }
    }, 1000);
    this.actionElement.innerText = "stop";
  }

  stop() {
    clearInterval(this.interval);
    this.actionElement.innerText = "reset";
  }
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
const navlinks = document.querySelectorAll("nav > ul > li");
const navBg = document.getElementById("bgindicator");

// We need to make two loops.
// The first loop cycles through all of the available nav links
// to set the eventlistener on them.  Remember, this outer forEach
// only happens on _page load_ when a button is _defined_.
navlinks.forEach((nav, i) =>
  nav.addEventListener("click", () => {
    // Remove the 'active' class from any navlink that currently has it.
    // This call of nav links only happens when a nav item is
    // selected.  This for loop happens every time a button
    // is clicked.
    navlinks.forEach((n) => n.classList.remove("active"));

    // Set the left margin to match the current index.
    navBg.style.marginLeft = `calc(calc(100%/3) * ${i})`;
    nav.classList.add("active");
  })
);

// ---------------------------------------------------------------------------
// Timer Functions
// ---------------------------------------------------------------------------

const timer = new Timer();
timer.reset();

const action = (action = "stop") => {
  switch (action.toLowerCase()) {
    case "start":
      timer.start();
      break;
    case "reset":
      timer.reset();
    default:
      timer.stop();
      break;
  }
};

// ---------------------------------------------------------------------------
// Settings Gear
// ---------------------------------------------------------------------------
const settingsContainer = document.getElementById("settingscontainer");

// Click to open the settings window
document
  .querySelector("#settings > img")
  .addEventListener("click", () => (settingsContainer.style.display = "block"));

// Settings Overlay
// When someone clicks on the background, it should close the settings window.
document
  .getElementById("settingsoverlay")
  .addEventListener("click", () => (settingsContainer.style.display = "none"));

// Settings close button
document
  .getElementById("close")
  .addEventListener("click", () => (settingsContainer.style.display = "none"));

// prevent default on the up and down buttons
document.querySelectorAll(".uparrow").forEach((arrow) =>
  arrow.addEventListener("click", (ev) => {
    ev.preventDefault();
  })
);

document.querySelectorAll(".downarrow").forEach((arrow) =>
  arrow.addEventListener("click", (ev) => {
    ev.preventDefault();
  })
);

/**
 * Increment a number input in the settings window,
 * @param {string} input The id of the element to update.
 */
const inc = (input) => document.getElementById(input).stepUp(1);

/**
 * Decrement a number input in the settings window,
 * @param {string} input The id of the element to update.
 */

const dec = (input) => document.getElementById(input).stepDown(1);
