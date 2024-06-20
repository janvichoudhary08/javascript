// Primitive call by value

// 7 Types : Strings , Number , Boolean , null , undefined , Symbol , BigInt
// undefined is variable declare hai memory space declare hai kya value ayegi voh nahi pata 


const score = 100 //  number
const scoreValue = 100.3 // number

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherid =Symbol ('123')

console.log(id ==anotherid); // false (this is the work of symbol)
const bigNumber = 345657658767876998n

// Referenced (Type Non Primitive) memory mai reference  directly allocate  kiya jata hai

// Arrays , Objects , functions


const heros = ["Shaktiman", "naagraj" , "doga"] 

//Objects

let myObj = {
    name: "Janvi",
    age:21,
}
// let myObj => variable mai store ho raha hai ; inside {} there is object

// function(){} funstion definiton
// function definition stored in a variable

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction ); // function return function ( function object ) , non primitive ka datatype hai object

// to know datatype
console.log(typeof bigNumber); // undefined
console.log( typeof outsideTemp ); // object
console.log( typeof scoreValue); // number

/*
typeof val => Result
Undefined => 'undefined'
Null => 'object'
Boolean => 'boolean'
Number => 'number'
String => 'string'
 
// https://262.ecma-international.org/5.1/#sec-11.4.3 read from here

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime
rather than at compile time. Variables in JavaScript can hold values of any type and can change types during execution
1. You don't declare the type of a variable when you create it. Instead, you simply use the var, let, or const
 let myVariable = 42; // myVariable is a number
myVariable = "Hello, world!"; // now myVariable is a string
2.JavaScript often automatically converts values from one type to another when it makes sense to do so, a process known as type coercion
console.log(5 + "5"); // "55" (number is coerced to string)
console.log("5" - 3); // 2 (string is coerced to number)
3.Functions and methods can accept arguments of any type and return values of any type, often 
leading to flexible but sometimes less predictable code.
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3
console.log(add("Hello, ", "world!")); // "Hello, world!"
Because JavaScript is dynamically typed, the types of variables and the behavior of operations on 
Because JavaScript is dynamically typed, the types of variables and the behavior of operations on 
are explicitly declared and enforced at compile time.
*/

