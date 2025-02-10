// !task 1>>>>>>
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

// console.log(colors["golden rod"]);


// !task 2>>>>>>
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity']=5;
// console.log(car);


// !task 3>>>>>>
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
const result = student.physics.marks
// console.log(result);


// !task 4>>>>>>
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const identity = Object.keys(students);
// console.log(identity.length);


// ?Task-5 (Hard)
// ?Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
for(property in myObject){
    let valueType = typeof(myObject[property])
    console.log('key:', property, '|','type:', valueType);
}