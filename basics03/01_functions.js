// function definition
// function definition input => parameters ; function call => arguments

function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("N");
    console.log("V");
    console.log("I");
}
sayMyName() // execution , reference
/*function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
 }  result undefined*/ 

// console.log("Result: ", result);   // Result : undefined

 function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result             to print any console.log("Janvi") do it before result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // stored in variable 
// console.log("Result: ", result);   // Result : 8

addTwoNumbers() // Nan as we dont know what is inside number1 and number2
addTwoNumbers(3,4) // 7
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, "a")  // 3a
addTwoNumbers(3, null) // 3 




//  writing console doesnt mean it is returning that value ,  console mean yeh print kr raha hai , return is alg concept

/*function loginUserMessage(username = "sam"){
    return`${username} just logged in`
}
console.log(loginusername("Janvi")) // Janvi just logged in
console.log(loginusername())  // undefined just logged in*/


function loginUserMessage(username = "sam"){  // when sam is given we will not be going in the block and will write in output sam just logged in
    if(!username){         //username===undefined
        console.log("PLease enter a username"); // PLease enter a username ; undefned ( when sam was not written)
        return                                 // undefined
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Janvi"))          overwrite sam and write janvi just logged in
// console.log(loginUserMessage("Janvi"))





/*function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2) // 2
console.log(calculateCartPrice(200, 400, 500, 2000))// 200
 */
//first item is printed only so rest operator(multipe value kese pass hoti hai)is used ...(bundle mai karo aur run kro) depend on condition rest or spread 

function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(200, 400, 500)) // [ 200, 400, 500 ] ( inside array )

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // [500,2000] 200=> val1 , 400=> val2 rest in array

const user = { // object created
    username: "hitesh",
    prices: 199
}
// object passed in function
function handleObject(anyobject){
    
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// function call
handleObject(user)   // compulsaory to pass object
// Username is hitesh and price is undefined ;as written prices have to write price

// direct object pass
handleObject({
    username: "sam",
    price: 399
}) //Username is sam and price is 399


// array pass 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]


// console.log(returnSecondValue(myNewArray)); //400

console.log(returnSecondValue([200, 400, 500, 1000]));  // 400