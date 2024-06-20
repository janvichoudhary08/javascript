//outdated
const name = "Janvi"
const repoCount = 50

//console.log(name + repoCount +" value ");
// today time we use backticks ( benefits = string interpolation placeholders are made and variables are directly injected in them)


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('hitesh-hc')

// console.log(gameName[0]); // h
// console.log(gameName.__proto__);  // {}

//console.log(gameName.length); // 8 ( functions or methods available check in browser)
// console.log(gameName.toUpperCase()); // HITESHHC  no changes in original string as primitive on copy

console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2 


const newString = gameName.substring(0, 4) // hite last char not included ,,, ignore neg value start from 0 only
console.log(newString);

const anotherString = gameName.slice(-8, 4) // ite reverse sai start krta hai......can use neg value in slice
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne); //         hitesh 
console.log(newStringOne.trim()); //  hitesh  trim remove starting and ending space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')); //  https://hitesh.com/hitesh-choudhary  replaced

console.log(url.includes('sundar'))  // false  whetrher it includes or not

console.log(gameName.split('-')); // [ 'hitesh', 'hc' ]
