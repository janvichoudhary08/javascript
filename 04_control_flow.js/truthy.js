const userEmail = "" // empty string so assumed no value printed dont have user email; if any string is given then assumed to be true and printed got user email
//const userEmail = ""      empty array is assumed to be true


if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} (empty fn are also truthy)        inside string  0 , false  anything added is truthy

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10      //5
// val1 = null ?? 10   //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 20 // 10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")