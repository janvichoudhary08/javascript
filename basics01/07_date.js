// Dates

let myDate = new Date() //  date is object which is created and lhs is its instance

//console.log(myDate) // 2024-06-20T16:49:07.213Z
//console.log(myDate.toString());  //Thu Jun 20 2024 16:49:48 GMT+0000 (Coordinated Universal Time
// console.log(myDate.toDateString());  //
// console.log(myDate.toLocaleString());  //
// console.log(typeof myDate); // object

//let myCreatedDate = new Date(2023, 0, 23) // declaration
//console.log(myCreatedDate.toDateString());// Mon Jan 23 2023; month start from 0 in JS

 //let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 //console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

//let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() // quizes , polls

//console.log(myTimeStamp);// 1719149520463 (ms time)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert in secounds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long", // ctrl + space
    
})