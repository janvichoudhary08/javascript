/*let a = 10
const b = 20
var c =  30 

console.log(a); // 10
console.log(b);  // 20
console.log(c);  // 30*/

 //if var working same then why let 
 //{} => scope  ; {} in object => object declaration ; {} with fn , if else => scope

 if(true){    // block scope ; outside it is global scope value written is global scope made available for block scope but block scope value should n't go out
    let a = 10
    const b = 20
    var c = 30
 }
 console.log(a); // ReferenceError  a is not defined which is good as a used inside it shouldnot be coming outside
console.log(b);  // ReferenceError  b is not defined
console.log(c);  // 30  problem 30 should n't come out

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // INNER : 10 ; 300
    
}
// browser => inspect scope diff ; cone enviornment mai node ke through block scope is diff


// scope level and mini hoisting

function one(){
    const username = "Janvi"

    function two(){
        const website = "youtube"
        console.log(username); // ( we are checking as we are inside func 2 can we access username func 1)
    }
    // console.log(website);  webiste is not defined ( cannot be accessed as its scope was ended with curly braces ) as there comes error in this so two not get executed as line by line execution hota hai

     two()

}       //  Janvi
//one()
if (true) {
    const username = "Janvi"
    if (username === "Janvi") {
        const website = " youtube"
        // console.log(username + website); Janvi youtube
    }
    // console.log(website); website not defined 
}

// console.log(username); username ka scope bhi yaha nahi hai

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //6

function addone(num){
    return num + 1
}



addTwo(5) // error ;cannot access addTwo before initialization ;  upper was only declaration here with declaration variable ko hold bhi kiya hai ( hoisting) 
const addTwo = function(num){
    return num + 2
}









