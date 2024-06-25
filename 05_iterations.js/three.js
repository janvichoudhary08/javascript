// for of loop
// higher order array loops


// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {      // ( const iterator of object) variable declare kijye tell kis pr  loop lagana 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps unique and in order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // will not be added as not unique


// console.log(map);

for (const [key, value] of map) {       // array de-structure
    // console.log(key, ':-', value);    // IN:- India
}


//for of on object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {       // myobj 
//     console.log(key, ':-', value);
    
// }