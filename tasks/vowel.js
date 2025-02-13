// Write a function to count the number of vowels in a string.
function finder(str) {
  let count = 0;
  const totalVowel = ["a", "e", "i", "o", "u"];
  for (vowel of str) {
    if (totalVowel.includes(vowel)) {
      count++;
    }
  }
  return count;
}
const output = finder("amar sonar bangla ami tomai valobasi");
console.log(output);
