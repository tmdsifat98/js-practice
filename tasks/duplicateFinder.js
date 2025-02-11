let num = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let unique = [];
for (let i = 0; i < num.length; i++) {
  if (!unique.includes(num[i])) {
    unique.push(num[i]);
  }
}
console.log(unique);


