let text =
  "Xylophones and x-rays exist in the galaxy, while yellow yachts sail beyond the horizon.";
let doReplace = text
  .replace(/x/g, "a")
  .replace(/y/g, "x")
  .replace(/a/g, "y");
console.log(doReplace);
