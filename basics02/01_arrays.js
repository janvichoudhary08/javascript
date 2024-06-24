// array... resizeable array of js . accessed using index , array create shallow copy .. change made are in original array also there are deep copies

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]); // 0 based  indexing


const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // 1

// Array methods

//myArr.push(6)
/* console.log(myArr); [
    0, 1, 2, 3,
    4, 5, 6
  ] */

// myArr.push(7)
//console.log(myArr);
// myArr.pop()           pop last element

// myArr.unshift(9)                    9 is inserted at beginning ... time consuming
// myArr.shift()                         9 shifted means removed 

// console.log(myArr.includes(9));         false check  whether it includes 9 or not  give answer in boolean return type 
// console.log(myArr.indexOf(9));           -1 ( as not avaliable 9) ; console.log(myArr.indexOf(3));  gives 3  as on 4rd index   

//const newArr = myArr.join()           join bind the array and convert it into string

// console.log(myArr);
//console.log( newArr);

// console.log( typeof newArr);           string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // return a section of array 1, 2 is included 3 not included

console.log(myn1);  //
console.log("B ", myArr);
/*  A [0,1,2,3,4,5]
   [1,2]
   B [0,1,2,3,4,5] */

const myn2 = myArr.splice(1, 3) //  1 , 2 ,3 included ,last range also included
console.log("C ", myArr);
console.log(myn2);
/*  A [0,1,2,3,4,5]
   [1,2]
   B [0,1,2,3,4,5] 
   C [ 0,4,5]
   [1,2,3]

   */
  // splice manipulate original array  ..........