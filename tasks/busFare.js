/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 28;
let fare = 800;
let catagoryA = 'student';
catagoryA = 10 <= age && 28 >= age

if( age < 10 ){
    console.log('fare free')
}
else if (catagoryA) {
    console.log( fare / 2)
} 
else if( age >= 60 ){
    console.log( fare - (fare * 15 / 100))
}
else {
    console.log(fare)
}