function celToFer(farenhite) {
  const celcius = (farenhite - 32) * 5 / 9;
  return celcius;
}
const result = celToFer(98.4);
console.log(result);
