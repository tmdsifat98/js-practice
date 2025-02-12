const keys = ["name", "age", "city"];
const values = ["Rahim", 20, "Dhaka"];

let obj = {};
for(i=0;i<keys.length;i++){
    obj[keys[i]]=values[i]
}
console.log(obj);