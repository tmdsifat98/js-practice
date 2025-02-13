const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
];
let boroFriend = fruits[0];
for (i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  if (element.length > boroFriend.length) {
    //?element boro hole just dhore borofriend namer faka jaigai push kore dissi
    boroFriend = element;
  }
}
console.log("sobtheke boro nam:", boroFriend);

const num = "1,33,54,66,77,88,99,34,54,23";
let big = num[0];
for (let i = 0; i < num.length; i++) {
  let element = num[i];
  if (element > big) {
    big = element;
  }
}
console.log("ekhane boro number=", big);

// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = [167, 190, 120, 165, 137];
let highestValue = heights2[0];
for (let i = 0; i < heights2.length; i++) {
  const value = heights2[i];
  if (highestValue < value) {
    highestValue = value;
  }
}
console.log("ekhane highest value :", highestValue);

const friendsName = ["rahim", "robin", "rafi", "ron", "rashed"];
let lowestValue = friendsName[0];
for (let i = 0; i < friendsName.length; i++) {
  let nameValue = friendsName[i];
  if (lowestValue.length > nameValue.length) {
    lowestValue = nameValue;
  }
}
console.log("ekhane choto namer friend:", lowestValue);

// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

function finder(str) {
  let word = str.split(" ");
  let longWord = word[0];
  for (let i = 0; i < word.length; i++) {
    let sizeStr = word[i];
    if (longWord.length < sizeStr.length) {
      longWord = sizeStr;
    }
  }
  return longWord;
}
const sentence = "I am learning Programming to become a programmer";
const output = finder(sentence);
console.log(output);
