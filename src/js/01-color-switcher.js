const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEL = document.querySelector('body');

let intervalForColor = null;
let colorStart = false;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  changeColor();
}

function changeColor() {
  if (colorStart) {
    return;
  }
  colorStart = true;
  intervalForColor = setInterval(() => {
    bodyEL.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  colorStart = false;
  clearInterval(intervalForColor);
  //   bodyEL.style.backgroundColor = '#ffffff';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
