const userEmail = []

if(userEmail){
    console.log("Got user email");

}else{
    console.log("Don't have user email");
}


//falsy values

// false ,0 ,  -0, BigInt 0n ,"",null,undefined, NaN

//truthy values
 
//true, "0" , 'false' ," ", [] empty array ,{} empty object, function(){}  empty function

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Obeject is empty");
}

//nullish coalscing operator (??):null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ??10;
val1 = undefined ?? 10;
val1 = null ?? 60 ?? 20;
console.log(val1);

//ternary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") :console.log("more than 80")

