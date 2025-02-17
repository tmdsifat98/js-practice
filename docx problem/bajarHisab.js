// ধরো একটা  লোক  ৫০০ টাকা  নিয়ে  বাজার এ  গেলো   সে  ১০০ টাকার  মরিচ  কিনলো  এরপর  সে ২০০ টাকার  মাছ  কিনলো  এরপর  সবজি  কিনলো ৫০ টাকার
//  এখন  বলো  তো  লোকটির  কাছে  আর  কত  টাকা  আছে

function dueMoney(total, cost1, cost2) {
  const totalCost = cost1 + cost2;
  const remainingMoney = total - totalCost;
  return remainingMoney;
}

const output = dueMoney(500, 100, 200);
console.log(output);
