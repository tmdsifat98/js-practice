// const colors = ["red", "blue", "green", "yellow", "orange"];
// let revArray =[];
// for (let i = colors.length-1; i >= 0; i--) {
//     revArray.push(colors[i])
// }
// console.log(revArray);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let output =[];
// for(number of numbers){
//     let strToNum=parseInt(number)
//     if( strToNum %2===0){
//         output.push(strToNum);
//     }
// }
// console.log(output);

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let joint = numbers.join('')
// console.log(joint);

const statement = "I am a hard working person";
let rev = "";
let words = statement.split(" ");
for (word of words) {
  rev = word + " " + rev;
}
console.log(rev);
