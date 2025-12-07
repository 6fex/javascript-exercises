const convertToCelsius = function(temperature) {
  const tempInCelsius = (temperature - 32) * (5/9);
  return Math.round(tempInCelsius * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const tempInFahrenheit = (temperature * (9/5)) + 32;
  return Math.round(tempInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
