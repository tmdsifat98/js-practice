const sentance = "i am a good boy";
let result = "";
for (const letter of sentance) {
  result = letter + result; //!prothome letter gula show hocce loop e.pore result namer faka string er moddhe dhuktase. protibar result oi letter niye notun hoye jacche & abar letter tar age eshe bostase.
  //   console.log(result); //?eita chalale puro bepar ta aro clear hobe
}
console.log(result);
//**output>> yob doog a ma i*/


let rev = "";
for (let i = 0; i < sentance.length; i++) {
  const letter = sentance[i];
  rev = letter + rev;
//   console.log(letter); //?part wise output dekhar jonne
}
console.log(rev);
//**output>> yob doog a ma i*/


const ulta = sentance.split('').reverse().join('');
console.log(ulta);
//**output>> yob doog a ma i*/