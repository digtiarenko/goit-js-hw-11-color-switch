import colors from './colors';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsRandomizer = function () {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
};

export default colorsRandomizer;
