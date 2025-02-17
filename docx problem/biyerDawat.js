const relatives = [
  { name: "Alice", member: 1 },
  { name: "Bob", member: 2 },
  { name: "Charlie", member: 3 },
  { name: "Alice", member: 1 },
  { name: "David", member: 4 },
  { name: "Eve", member: 5 },
  { name: "Bob", member: 2 },
  { name: "Frank", member: 6 },
  { name: "Grace", member: 7 },
  { name: "Alice", member: 1 },
];

function relativeOfHero(fullArray) {
  let individuals = [];
  for (const object of fullArray) {
    let individual = false;
    for (const obj of individuals) {
      if (object.name === obj.name && object.member === obj.member) {
        individual = true;
        break;
      }
    }
    if (!individual) {
      individuals.push(object);
    }
  }
  return individuals;
}

const output = relativeOfHero(relatives);
console.log(output);
