const mobile = {
  brand1: "apple",
  brand2: "xiaomi",
  xiaomi: {
    model: "M3",
    color: "blue",
  },
};
console.log(mobile); //puro object k dekhabe

console.log(mobile.xiaomi); //xiaomi property er value object dekhabe

console.log(mobile.xiaomi.model); //xiaomi er model show korbe

mobile.xiaomi.color = "red";  //nested object er value change kora jabe
console.log(mobile);
