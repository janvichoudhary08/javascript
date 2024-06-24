// this and arrow function
// this keyword refer current context

/*const user = {
    username: "Janvi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()   //  Janvi , welcome to website
user.username="Sam" // we  changed context(context => simple values , what variables are holding)
user.welcomeMessage()  // Janvi , welcome to website ;  Sam , welcome to website
// this is changed as as value was not hard code we said jo bhi current context hai  usme jo username value hai usko print karo
*/
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 console.log(this); // {} current context => empty
 // when in node enviornment this refer to empty object as no context in global
 // in inspect  => console.log(this); give window
 // pehle ke tym js ko execute krna ka ek hi tarika tha browser ke andr ; engine to execute js was found at one place inside browser
 // abhi humne engine ko nikal and diff name diye like node toh abhi engine stand alone hai
 // so when engine is runned inside browser  sabse jyada global object hai voh window object hai

 function chai(){
   let username = "hitesh"
    console.log(this.username); // (this)when this is printed inside  function in node enviornment we get lot valuse; (this.username)  can not used as  when inside function ..only for object
 }

 chai()

 const chai = function () { // same as above  only stored in variable . it also gives undefined like above
   let username = "hitesh"
    console.log(this.username);
 }  //chai()

 // arrow function

 const chai =  () => {
    let username = "hitesh"
    console.log(this.username); //   console.log(this);  => empty parenthesis {} 
} // also give undefined 

// chai()



// const addTwo = (num1, num2) => {          for  {} return keyword has to be used  // explicit return as return is used 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )    7      for ()  return may no be used // implicit return

const addTwo = (num1, num2) => ({username: "hitesh"})  // has to wrap in parenthis () otherwise it give undefined


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()