let otp = "";
for (let i = 1; i <= 6; i++) {
  let result = Math.floor(Math.random() * 10); //random number niye ta 10 diye gun kora hoyece jeno 1 theke 9 obdi output dey..purno songkha pabar jonno floor kora hoyese
  otp = result + otp;
}
console.log(otp);
