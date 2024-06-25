// if
const isUserloggedIn = true
const temperature = 41

 /*if ( temperature < 50 ){      or  if ( temperature === 41 )
     console.log("less than 50");
 } 
    console.log("temperature is greater than 50");
// less than 50  ;  temperature is greater than 50
*/
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);       // User power:fly
// }

// console.log(`User power: ${power}`);           // power is not defined

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");                not a good practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }          less than 1200

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {    // 2==3 is false in && all should be true if 2==2 then   it will be printed and if 2==3 then not printed
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {       // || => or choice if any of the true than print
    console.log("User logged in");
}
