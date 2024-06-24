// In JavaScript, objects are collections of key-value pairs, and they can be used to store structured data.

// const tinderUser = new Object() // {}       (empty object)
const tinderUser = {}     // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {             // object
        userfullname: {                    // object
            firstname: "Janvi",
            lastname: "choudhary"
        }
    }
}

 //console.log(regularUser.fullname.userfullname) //{ firstname: 'Janvi', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname); // Janvi 

// object merge 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 /* const obj3 = { obj1, obj2 }
 { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
   same problem like array object mai object */

   //const obj3 = Object.assign({}, obj1, obj2) // {}  optional parameter ...guarnteed hai ki value yahi ayegi  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

   //const obj3 = Object.assign({}, obj1, obj2, obj4)  // {} => target ; obj1,obj2,obj3 =>  source

   const obj3 = {...obj1, ...obj2}    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

   console.log(obj3);

  //when value come from database  user aate hai as  array of object

  const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
           users[1].email // first value accessed   array hai toh  1st value access krni hai ..1st object hai toh . use kre

           console.log(tinderUser);

          console.log(Object.keys(tinderUser));     //  [ 'id', 'name', 'isLoggedIn' ] ; keys chahiye  kis object pr yeh method use krna hai
          console.log(Object.values(tinderUser));   //   [ '123abc', 'Sammy', false ]
          console.log(Object.entries(tinderUser));  // [ '123abc', 'Sammy', false ]

          console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true