/*
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */

const num1 = 5;
const num2 = 12;

let result = num1 > num2;

//normal if else

if (result) {
  console.log(num1 * 2);
} else {
  console.log(num1 + num2);
}
//10

// ternary operation

const result1 = result ? num1 * 2 : num1 + num2;
console.log(result1);
// 10