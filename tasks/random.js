// Generate a random number between 10 to 20.

function rand(num1, num2) {
  let result = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
  return result;
}
const output = rand(10, 20);
console.log('the random number is', output);
