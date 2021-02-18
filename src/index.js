import colorsRandomizer from './js/randomColor';

const startRef = document.querySelector('button[data-action = "start"]');
const stopRef = document.querySelector('button[data-action = "stop"]');
const bodyRef = document.querySelector('body');

let timerId = null;

startRef.addEventListener('click', handleStart);
stopRef.addEventListener('click', handleStop);

function handleStart() {
  console.log('аквадискотека');
  startRef.removeEventListener('click', handleStart);
  timerId = setInterval(changeColor, 1000);
}
function handleStop() {
  clearInterval(timerId);
  startRef.addEventListener('click', handleStart);
}

function changeColor() {
  const bgColor = colorsRandomizer();
  bodyRef.setAttribute('bgcolor', bgColor);
  console.log(bgColor);
}
