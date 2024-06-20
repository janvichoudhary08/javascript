
/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2 != 1);*/

console.log("2" > 1 ); // true 
console.log("02" > 1 ); // true
// true as js automatically converted 2 to number 

console.log(null > 0); // false 
console.log(null == 0 ); // false
console.log(null >= 0); // true

// In comparisons, null is converted to 0.
//For the == operator, null is only equal to undefined.

console.log(undefined == 0 ); // false
console.log( undefined > 0); // false
console.log( undefined < 0); //false

// === strict check datatype check also

console.log("2" === 2);  // false

console.log("2" == 2);   // true

// == => conversion hojata hai  ; === =>  datatype check krta same hai ya nahi