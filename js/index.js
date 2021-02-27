const navlinks = document.querySelectorAll("nav > ul > li");
const navBg = document.getElementById("bgindicator");
const settingsContainer = document.getElementById("settingscontainer");

// We need to make two loops.
// The first loop cycles through all of the available nav links
// to set the eventlistener on them.
navlinks.forEach((nav, i) =>
  nav.addEventListener("click", () => {
    // Remove the 'active' class from any navlink that currently has it.
    navlinks.forEach((n) => n.classList.remove("active"));
    // Set the left margin to match the current index.
    navBg.style.marginLeft = `calc(calc(100%/3) * ${i})`;
    nav.classList.add("active");
  })
);

//Settings Gear
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

const inc = (input) => document.getElementById(input).stepUp(1);
const dec = (input) => document.getElementById(input).stepDown(1);
