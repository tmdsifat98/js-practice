const fruits = ["amm", "jaam", "kola", "lichu", "kathal", "jamrul"];
//?array er element gula joint korte hole ,join use korbo

console.log(fruits.join()); //normal join

console.log(fruits.join('|'));
//**output >>>amm|jaam|kola|lichu|kathal|jamrul */

console.log(fruits.join('-'));
//output>>> amm-jaam-kola-lichu-kathal-jamrul

console.log(fruits.join('😏'));  //!jetai add korbo oita majhe asbe
//output >>> amm😏jaam😏kola😏lichu😏kathal😏jamrul