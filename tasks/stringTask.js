const sentence = "Amazingly, all apples are awesome!";
let sum = 0;
for(letter of sentence){
    if (letter.includes("a") === true) {
        sum = letter.length + sum;
      }
}
console.log(sum);