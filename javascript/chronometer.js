class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;

    // ... your code goes here
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
    // ... your code goes here
  }
  twoDigitsNumber() {
    if (this.currentTime < 10) {
      return this.currentTime.toLocaleString(this.currentTime, {minimumIntegerDigits:2}); 
    }
    // ... your code goes here
  }
  stopClick() {
    if (this.currentTime > 60) {
      clearInterval(this.currentTime);
    }
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
