function oddAvg(numbers) {
  let sum = 0; //consider sum zero at primary stage
  let size = 0;
  for (number of numbers) {
    if (number % 2 === 1) {
      sum += number; //only odd number k ber kore sum kora hocce
      size++; //koto gula odd ber holo seta count kora hoyese
    }
  }
  if (size == 0) {
    return 0;
  } else {
    const avg = sum / size;
    return avg;
  }
}
const values = [41, 15, 58, 65, 82, 96, 9];
let output = oddAvg(values);
console.log(output);
