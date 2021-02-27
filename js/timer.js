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
    console.log(Date.now());
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
    const startTime = Date.now() - this.timerElement.value;
    console.log(starttime);
    const display = (time) => (time <= 9 ? `0${time}` : `${time}`);
    this.countdown = setInterval(() => {
      let now = Date.now();
      let timeleft = startTime - now;
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      console.log(seconds);
      this.clock.innerText = `${display(minutes)}:${display(seconds)}`;
    }, 1000);
  }
}
