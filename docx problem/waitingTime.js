function waitingTime(waitingTimes, serialNumber) {
  let sumOfpub = 0;
  if (
    Array.isArray(waitingTimes) &&
    typeof serialNumber == "number" &&
    waitingTimes.length < serialNumber
  ) {
    for (let times of waitingTimes) {
      sumOfpub += times;
    }
    let avgTime = sumOfpub / waitingTimes.length;
    const newAvgTime = Math.round(avgTime);
    let isratsRemainingTime =
      (serialNumber - 1 - waitingTimes.length) * newAvgTime;
    return isratsRemainingTime;
  } else {
    return "Invalid Input";
  }
}

const public = [6,2];
const serial = 9;
const output = waitingTime(public, serial);
console.log(output);
