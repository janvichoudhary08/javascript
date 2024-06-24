const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros) // push on existing array

//console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 //console.log(marvel_heros[3][1]); // flash

 //const allHeros = marvel_heros.concat(dc_heros)
 //console.log(allHeros);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]     returns a new array

 // spread operator (ab array nahi ek ek element individual hogaya hai  )

 //const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*  [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]            values are spread out */

console.log(Array.isArray("Janvi"))  // false ( not a array )
console.log(Array.from("Janvi"))    // convert to array   [ 'J', 'a', 'n', 'v', 'i' ] ; objects can be given , strings
console.log(Array.from({name: "hitesh"})) // interesting  [] (empty array) couldnot convert , u have to tell keys ka banana array ya values ka array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // . of returns a new array from a set of elements( set of elements can be variables, array)
//[ 100, 200, 300 ]
// see these method again .from , .of