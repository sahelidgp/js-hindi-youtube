//Immediately Invoked Fucntion Expressions (IIFE)

// it is used to remove pollution due to global scope


//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

//first() function definition second() function execution 

//for multiple IIFE use semicolon at the end
//unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh');





