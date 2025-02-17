function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income >= expenses) {
    let revenue = income - expenses;
    let tax = (revenue * 20) / 100;
    return tax;
  } else {
    return "Invalid Input";
  }
}
let result = calculateTax(6000, 13500);
console.log(result);
