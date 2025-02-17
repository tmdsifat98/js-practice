// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestFinder(numbers) {
  let result = numbers[0];
  for (let number of numbers) {
    if (result > number) {
      result = number;
    }
  }
  return result;
}

const givenNum = [167, 190, 120, 165, 137];
let output = lowestFinder(givenNum);
console.log(output);


function relativeOfHero(allRelatives) {
  let uniqueRelatives = []; // এখানে ফিল্টার করা ডাটা রাখা হবে
  for (let relative of allRelatives) { // `allRelatives` অ্যারের প্রতিটি অবজেক্ট ঘুরে দেখা হবে
    let isDuplicate = false; // ধরে নিচ্ছি এটি নতুন ডাটা

    // এখন `uniqueRelatives`-এ চেক করবো, এটি আগে আছে কিনা
    for (let uniqueRelative of uniqueRelatives) {
      if (
        relative.name === uniqueRelative.name &&
        relative.member === uniqueRelative.member
      ) {
        isDuplicate = true; // যদি আগের ডাটার সাথে মিলে যায়, তাহলে এটি ডুপ্লিকেট
        break; // একবার মিল পেলে আর লুপ চালানোর দরকার নেই
      }
    }

    // যদি এটি ডুপ্লিকেট না হয়, তাহলে নতুন অ্যারেতে যোগ করবো
    if (!isDuplicate) {
      uniqueRelatives.push(relative);
    }
  }

  console.log(uniqueRelatives);
}