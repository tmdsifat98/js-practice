//! Take four parameters. Multiply the four numbers and then return the result
function multiply(num1, num2, num3, num4) {
  const result = num1 * num2 * num3 * num4;
  return result;
}
const output1 = multiply(11, 12, 13, 14);
console.log("the multiplication is :", output1);
// !Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

let result = "";
function operation(num) {
  if (num % 2 === 1) {
    result = num * 2;
    return result;
  } else {
    result = num / 2;
    return result;
  }
}
const output2 = operation(15);
console.log('the result is', output2);

//! Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
  let total = 0;
  for (let num of numbers) {
    total = total + num;
  }
  let average = total / numbers.length;
  return average;
}
const output3 = make_avg([63, 94, 55]);
console.log('average of those number is', output3);

//! Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(numb) {
  let count = 0;
  for (let number of numb) {
    if (number == 0) {
      count = count + 1;
    }
  }
  return count;
}
let output4 = count_zero([0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1]);
console.log('the zero includes in binary number', output4, 'times');

//!Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(int) {
  if (int % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
let output5 = odd_even(112);
console.log("the number is", output5);
