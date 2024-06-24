// objects declared in two ways as literal or constructor
// singleton...when  created with constructor .apne tarah ka ek hi object
// literals sai not singleton

// object literals

const mySym = Symbol("key1") // symbol declare


const JsUser = {
    name: "Janvi",
    "full name": "Janvi Choudhary",
    [mySym]: "mykey1",      // [] khud batata hai mai symbol hu
    age: 18,
    location: "Jaipur",
    email: "Janvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

    //console.log(JsUser.email)  // Janvi@google.com   when . using string ki tarah access krne ki need nahi
    //console.log(JsUser["email"])  // Janvi@google.com

   // console.log(JsUser["full name"])

   /* console.log(JsUser.mySym)
     console.log(typeof JsUser.mySym)  // string not using as symbol      */


   // console.log(JsUser[mySym])   mykey1 
   // value both are giving same mykey1 but correct syntax is using [] bracket

   JsUser.email = "hitesh@chatgpt.com" // object change
// Object.freeze(JsUser)               // object freeze changes will not be done
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
  console.log(JsUser.greeting); // undefined
  console.log(JsUser.greeting());  // JsUser.greeting is not a function

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());  
/* Hello  JS user 
   undefined
   Hello  JS user,  Janvi 
   undefined
   */ 