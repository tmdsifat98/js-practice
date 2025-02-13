const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61, 7, 5, 1];
function duplicate(inp) {
  let result = [];
  for (number of inp) {
    if (!result.includes(number)) {  //jodi result a oi element gula na thake tahole element gula result a push korbe
      result.push(number);
    }
  }
  return result;
}
const output = duplicate(numbers);
console.log(output);
