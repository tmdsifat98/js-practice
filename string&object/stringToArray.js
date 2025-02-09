const gf = "My gf reads in khulna University";

console.log(gf.split()); //?returns whole string to an full array

console.log(gf.split(''));  //?prottekta letter and white space k array er element banacce

console.log(gf.split(" ")); //?white space disi bole sudhu white space borabor vag hobe
//** */ output [ 'My', 'gf', 'reads', 'in', 'khulna', 'University' ]

//amra chaile jekono letter diye o vag korte pari.. Just quote er moddhe oi letter dite hobe
console.log(gf.split("a"));  //!'a' diye vag korsi tai a bade baki sob alada array er moddhe gese
//**output  [ 'My gf re', 'ds in khuln', ' University' ] */