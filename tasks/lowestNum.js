// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestFinder(numbers) {
  let result = numbers[0];
  for (let number of numbers) {
    if (result > number) {
      result = number;
    }
  }
  return result;
}

const givenNum = [167, 190, 120, 165, 137];
let output = lowestFinder(givenNum);
console.log(output);
