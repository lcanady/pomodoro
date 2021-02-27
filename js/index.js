import { Timer } from "./timer.js";

const navlinks = document.querySelectorAll("nav > ul > li");
const navBg = document.getElementById("bgindicator");
const settingsContainer = document.getElementById("settingscontainer");
const time = document.getElementById("time");

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

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
// ---------------------------------------------------------------------------
// Settings Gear
// ---------------------------------------------------------------------------

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

timer.select("shortbreak");
timer.start();
