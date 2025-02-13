// Generate a random number between 10 to 20.

function rand() {
  let result = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  return result;
}
const output = rand();
console.log(output);
