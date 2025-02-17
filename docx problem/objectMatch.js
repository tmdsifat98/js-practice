const patroBio = {
  name: "Hero Vai",
  homeDistrict: "Khulna",
};
const patriBio = {
  name: "Trisha Ahmed",
  homeDistrict: "Khulna",
};

function matched(patro, patri) {
  if (
    typeof patro == "object" &&
    typeof patri == "object" &&
    !Array.isArray(patro) &&
    !Array.isArray(patri)
  ) {
    if (patro.homeDistrict == patri.homeDistrict) {
      return "proposal done";
    }
    return "district doesnt mached";
  } else {
    return "Invalid input";
  }
}
const output = matched(patroBio, patriBio);
console.log(output);
