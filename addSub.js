const age = [34, 56, 74, 34, 25, 67, 1, 33, 88, 45, 65];
age.push(88);       //এলিমেন্টকে শেষে যোগ করবে
console.log( age );

console.log(Array.isArray(age));  // kono variable array ki na seta define kore 

const cut = age.slice(2,8);   //array er moddhe theke kisu element ber kore anar jonne
console.log(cut);

const marks = [34, 56, 74, 34];
marks.pop();        //এলিমেন্টকে শেষ থেকে বের করে দেবে
console.log( marks );

marks.shift();      //১ম এলিমেন্ট বের করে দেবে
marks.unshift( 999 ); //কোনো এলিমেন্ট কে প্রথমে যোগ করবে
console.log(marks);