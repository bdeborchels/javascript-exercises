const convertToCelsius = function(number) {
  var celsius = 0;
  celsius += ((number - 32) * 5)/9;

  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(number) {
  var fahrenheit = 0;
  fahrenheit += (number * 9/5) +32;

  return Math.round(fahrenheit * 10) / 10;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
