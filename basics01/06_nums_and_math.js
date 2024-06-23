const score = 400 // node basics01/nums_and_math.js
console.log(score); // 400

const balance = new Number(100)
console.log(balance);  // [Number: 100]

//console.log(balance.toString().length); // 3 as 100 has 3 char
// console.log(balance.toFixed(1)); // 100.0

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3));// 23.9

/* const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // 124 pri more given to decimal sai pehle

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); */

 // +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4 neg to posi not p to neg
// console.log(Math.round(4.6)); // 5 roundoff
// console.log(Math.ceil(4.2));  // 5 top
// console.log(Math.floor(4.9));  // 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives value in range 0 to 1 in decimal
console.log((Math.random()*10) + 1);   //  1.6557260047738178
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)