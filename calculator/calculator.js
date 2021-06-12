const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return (arr.length > 0) ? arr.reduce((a, b) => a + b) : 0;
};

const multiply = function(arr) {
  return (arr.length > 1) ? arr.reduce((a, b) => a * b) : 0;
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(a) {
	if (a === 0 || a === 1) return 1;
  return a * factorial(a -1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
