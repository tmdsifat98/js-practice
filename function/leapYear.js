function leap(year) {
  let result = "";
  if (year >= 1000 && year <= 3000) {
    if (year % 2 !== 0 && year % 4 == 0) {
      result = "Its leapYear";
      return result;
    } else if (year % 2 == 0 && year % 400 == 0) {
      result = "Its leapYear";
      return result;
    } else {
      result = "Its not a leapYear";
      return result;
    }
  }
  result = "please input year between 1000 to 3000";
  return result;
}
const output = leap(2400);
console.log(output);
