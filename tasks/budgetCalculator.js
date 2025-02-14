// Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000;

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const totalLaptopPrice = laptopPrice * laptopQuantity;
  const totalTabletPrice = tabletPrice * tabletQuantity;
  const totalMobilePrice = mobilePrice * mobileQuantity;

  let requiredPrice = totalLaptopPrice + totalMobilePrice + totalTabletPrice;
  return requiredPrice;
}

let item = calculateElectronicsBudget(1, 1, 2);
console.log(item);
