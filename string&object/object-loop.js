const person = {
    name: "Ali",
    age: 28,
    city: "Chittagong",
    occupation: "Software Engineer",
    hobby: "Photography",
    country: "Bangladesh"
  };
  for( let prop in person){
    console.log(prop, '>>', person[prop]);   //?prop ta mainly person er property define kortase & jokhon person[] er moddhe in korese tokhon value output kortase
  }
/**output 
name >> Ali
age >> 28
city >> Chittagong
occupation >> Software Engineer
hobby >> Photography
country >> Bangladesh
 */