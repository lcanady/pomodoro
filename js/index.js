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
// Settings Gear
// ---------------------------------------------------------------------------
const settingsContainer = document.getElementById("settingscontainer");

// Click to open the settings window
document.querySelector("#settings > img").addEventListener("click", () => {
  settingsContainer.style.visibility = "visible";
  settingsContainer.style.opacity = 1;
});
