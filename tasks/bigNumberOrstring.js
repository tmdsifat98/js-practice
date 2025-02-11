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
    if (element.length > boroFriend.length)   //?element boro hole just dhore borofriend namer faka jaigai push kore dissi
      {
      boroFriend = element;
    }
  }
  console.log(boroFriend);


  let big = num[0];
for (let i = 0; i < num.length; i++) {
  let element = num[i];
  if (element > big) {
    big = element;
  }
}
console.log(big);