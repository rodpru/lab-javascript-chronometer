const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  // ... your code goes here
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  console.log(chronometer.twoDigitsNumber(chronometer.getMinutes())[1]);
  // ... your code goes here
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";

  // ... your code goes here
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  // ... your code goes here
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";

  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')) {
    setStopBtn();
    chronometer.startClick(printTime);
    console.log(chronometer.currentTime);
  } else {
    btnLeft.classList.contains('stop');
    setStartBtn();
    chronometer.stopClick();

  }
});


// ... your code goes here

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    setSplitBtn();
    chronometer.splitClick(printTime);
  } else {
    btnRight.classList.contains('split');
    setResetBtn();
    chronometer.resetClick(printTime);
  }
  // ... your code goes here
});
