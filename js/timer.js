export class Timer {
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
    this.timer = this.timerElement.value;
    this.text = this.timer <= 9 ? `0${this.timer}` : `${this.timer}`;
    this.actionElement.innerText = "start";
    this.clock.innerText = `${this.text}:00`;
  }

  /**
   * Set a
   * @param {string} type
   */
  select(type) {
    this.timerElement = document.getElementById(type);
    this.reset();
  }

  start() {
    // Set the start time
    let timer = this.timerElement.value * 60;
    let minutes = 0;
    let seconds = 0;
    // start an interval of 1 second to track time
    let interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Set the clock display.
      this.clock.innerText = minutes + ":" + seconds;

      // Clear the interval when we're done!
      if (--timer < 0) {
        timer = 0;
        clearInterval(interval);
        this.actionElement.innerText = "reset";
      }
    }, 1000);
  }
}
