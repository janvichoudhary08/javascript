// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution sa problem hoti hai kaafi baar toh global scope ke variable ya jo bhi declarations hai voh hatane ke liye we used iife


(function chai(){                // ()immiediately block created 
    // named IIFE
    console.log(`DB CONNECTED`);
})();          //; to write two iife for execution of two iffe semicolon is required to end

( (name) => {     // taken as aargument
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')      // passs hitesh