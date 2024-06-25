// map also a callback function

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers  // chaining  map ke baad map fir filter
                .map((num) => num * 10 ) // result passed to 2nd chaining
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);