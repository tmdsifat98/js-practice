function calculateFinalScore(obj) {
  let familyNum = 0;
  if (typeof obj !== "object") {
    return "Invalid Input";
  } else {
    if (obj.isFFamily) {
      familyNum = 20;
    }
    let totalScore = obj.testScore + obj.schoolGrade + familyNum;
    if (totalScore >= 80) {
      return true;
    } else {
      return false;
    }
  }
}
const qualification = {
  name: "Rajib",
  testScore: 50,
  schoolGrade: 30,
  isFFamily: false,
};
// calculateFinalScore(qualification);
let output = calculateFinalScore(qualification);
console.log(output);
