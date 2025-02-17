const girls = [
  "Trisha",
  "Neela",
  "Roopsha",
  "Sworna",
  "Meghla",
  "Antara",
  "Snigdha",
  "Payel",
  "Tonima",
  "Maya",
  "Ayesha",
  "Tasnim",
  "Nabila",
  "Safa",
  "Maryam",
  "Inaya",
  "Fariha",
  "Labiba",
  "Jannat",
  "Mahira",
];

function heroVaiWife(name) {
  let likedGirl = [];
  for (const girl of girls) {
    if (girl.includes('h')) {
      likedGirl.push(girl);
    }
  }
  return likedGirl;
}

const output = heroVaiWife(girls);
console.log(output);
