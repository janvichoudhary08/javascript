/* let score = 33; number 

let score ="33";

console.log(typeof score);

let valueInNumber = Number(score)
console.log( typeof score);

console.log( typeof valueInNumber); */

let score = "33abc";

console.log(typeof score);
let valueInNumber = Number(score)
console.log( typeof valueInNumber );

console.log( valueInNumber ); // Nan

//let score = null;

//let score = undefined ;

//let score = true;

// "33" => number converted to number

//"33abc"=> Nan Not a number ( type number hi hai)
// true=> 1 ; false => 0




let IsLoggedIn = 1 // 1 convert krke boolean mai true hoga

let BooleanIsLoggedIn = Boolean(IsLoggedIn);
//console.log(BooleanIsLoggedIn);

// 1 => true ; 0 => false
// " janvi" = true ; " " = false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log( typeof stringNumber ); // string

// dikhne mai number jesa hai but hai hai string
