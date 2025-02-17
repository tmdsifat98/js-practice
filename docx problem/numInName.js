function checkDigitsInName(name) {
  let resultValue = false;
  if (typeof name == "string") {
    for (let letter of name) {
      if (!isNaN(letter) && letter !== " ") {
        resultValue = true;
        break;
      }
    }
  } else {
    return "invalid input";
  }
  return resultValue;
}
// checkDigitsInName("rahim123");
let output = checkDigitsInName('sifat');
console.log(output);
