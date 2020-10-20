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
  twoDigitsNumber(number) {
    if (this.currentTime < 10) {
      return `0${number}`;  
    }
    return number;
    // ... your code goes here
  }
  stopClick() {
      clearInterval(this.intervalId);
  
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
}
