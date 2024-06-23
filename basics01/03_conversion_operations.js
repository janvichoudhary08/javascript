 let score = 33; number 

let score ="33";

console.log(typeof score);

let valueInNumber = Number(score)
console.log( typeof score);

console.log( typeof valueInNumber); 



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
console.log(BooleanIsLoggedIn);

// 1 => true ; 0 => false
// " janvi" = true ; " " = false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log( typeof stringNumber ); // string

// dikhne mai number jesa hai but hai hai string


//*****************************Operations**********************

let value = 3
let negValue =  -value;
//console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);*/

let str1 = "janvi"
let str2 = "choudhary"

let str3 = str1 + str2
 // console.log(str3);


/*console.log("1" + 2);
console.log( 1 + "2");
console.log("1" + 2 + 2);// if string first all are treated as string

console.log(1 + 2 + "2");// if  string at last then pehle conversion ho jayega

console.log(true); // true
console.log(+true); //  1 
console.log(true+); // error
console.log(+"");

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2 */

let gameCounter = 100
gameCounter++
console.log(gameCounter); // 101 postfix

++gameCounter;//101 prefix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // x is assigned first to y(y:3) then x incremented 4

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);// a is first incremented (a=4) then assigned to b 

