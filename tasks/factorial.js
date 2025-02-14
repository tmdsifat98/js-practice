function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result
}
const output = factorial(3)
console.log(output);