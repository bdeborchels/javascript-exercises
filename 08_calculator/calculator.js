const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum;
};

const multiply = function(array) {
  let mul = 1;
  for (const items of array) {
    mul *= items;
  }
  return mul;
};

const power = function(numOne,numTwo) {
return Math.pow(numOne,numTwo);
	
};

const factorial = function(num) {
let factorial = 1;

for(let i = 1; i<= num; i++){
  factorial = factorial * i;
}
	return factorial;
};

add(0,0);
add(2,2);
add(2,6);
subtract(10,4);
sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);
multiply([2,4]);
multiply([2,4,6,8,10,12,14]);
power(4,3);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
