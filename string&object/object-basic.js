const car = {
  model: "Lambo",
  color: "red",
  price: 2500000,
  EMI: true,
  "maliker nam": "abul",
};
console.log(car); //pura object show korbe

console.log(car.color); //sudhu color output korbe

console.log(car["color"]); //!space wala property dekhate use kora hoy
console.log(car["maliker nam"]);

//!value change
car.price = car.price - ((car.price * 5) / 100);  //5% discount deoya hoise
console.log(car);