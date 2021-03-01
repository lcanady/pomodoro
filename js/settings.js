// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

// Create a settings object to hold our different presets:
let settings = {
  pomodoro: 25,
  shortbreak: 5,
  longbreak: 15,
  font: "Kumbh Sans",
  color: "orange",
};

let settingsDefault = {
  pomodoro: 25,
  shortbreak: 5,
  longbreak: 15,
  font: "Kumbh Sans",
  color: "orange",
};
const form = document.getElementsByTagName("form")[0];
const apply = document.getElementById("apply");
const applybg = document.getElementById("applybg");
const circle = document.querySelector("#ring > circle");
/**
 *
 * @param {string} setting The setting key we want to change
 * @param {any} val The value to set.
 */
const mapSettings = (setting, val) => {
  settings[setting] = val;
  document.querySelectorAll("form h2, form h4, #apply").forEach((item) => {
    item.style.fontFamily = settings.font;
  });
  applybg.style.backgroundColor = `var(--${settings.color})`;
};

/**
 * Update the global settings from the settings object.
 */
const updateSettings = () => {
  navBg.style.backgroundColor = `var(--${settings.color})`;
  circle.style.stroke = `var(--${settings.color})`;
  document.body.style.fontFamily = settings.font;
  timer.pomodoro = settings.pomodoro;
  timer.shortbreak = settings.shortbreak;
  timer.longbreak = settings.longbreak;
  timer.reset();
};

/**
 * Increment a number input in the settings window,
 * @param {string} input The id of the element to update.
 */
const inc = (input) => {
  const inputEl = document.getElementById(input);
  inputEl.stepUp(1);
  mapSettings(input, inputEl.value);
};

/**
 * Decrement a number input in the settings window,
 * @param {string} input The id of the element to update.
 */

const dec = (input) => {
  const inputEl = document.getElementById(input);
  inputEl.stepDown(1);
  mapSettings(input, inputEl.value);
};

// Settings Overlay
// When someone clicks on the background, it should close the settings window.
document.getElementById("settingsoverlay").addEventListener("click", () => {
  settingsContainer.style.opacity = 0;
  settingsContainer.style.visibility = "hidden";
  settings = settingsDefault;
});

// Settings close button
document.getElementById("close").addEventListener("click", () => {
  settingsContainer.style.opacity = 0;
  settingsContainer.style.visibility = "hidden";
});

// prevent default on the up and down buttons
document.querySelectorAll(".uparrow").forEach((arrow) =>
  arrow.addEventListener("click", (ev) => {
    ev.preventDefault();
  })
);

// prevent default on the up and down buttons
document.querySelectorAll(".downarrow").forEach((arrow) =>
  arrow.addEventListener("click", (ev) => {
    ev.preventDefault();
  })
);

// Font Buttons
const fontButtons = document.querySelectorAll(".font");

fontButtons.forEach((button) =>
  button.addEventListener("click", (ev) => {
    // remove the active status from all font button divs
    fontButtons.forEach((btn) => btn.classList.remove("fontactive"));
    // Set the active status on the current font selection
    button.classList.add("fontactive");
    if (button.classList.contains("kumbh")) {
      mapSettings("font", "'kumbh Sans', sans-seif");
    } else if (button.classList.contains("roboto")) {
      mapSettings("font", '"Roboto Slab", serif');
    } else {
      mapSettings("font", '"Space Mono", monospace');
    }
  })
);

// Color buttons
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    // Set the color of the 'apply' button to preview
    if (color.classList.contains("orange")) {
      mapSettings("color", "orange");
    } else if (color.classList.contains("blue")) {
      mapSettings("color", "green");
    } else {
      mapSettings("color", "purple");
    }
    // remove the active class from all buttons.
    colors.forEach((color) => color.classList.remove("coloractive"));
    color.classList.add("coloractive");
  });
});

// Apply button
document.getElementById("apply").addEventListener("click", (ev) => {
  ev.preventDefault();
  updateSettings();
  settingsDefault = settings;
  settingsContainer.style.opacity = 0;
  settingsContainer.style.visibility = "hidden";
});
