const convertToCelsius = function(fahrenheit) {
  let converted = (fahrenheit - 32) * 0.5556
  if(converted % 1 != 0) converted =  converted.toFixed(1)
  return +converted
};

const convertToFahrenheit = function(celsius) {
  let converted = celsius * 1.8 + 32;
  if(converted % 1 != 0) converted = converted.toFixed(1);
  return +converted
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
