//  Primitive(Pass by value)

//7 types : String, Number, Boolean ,null, undefined,Symbol,BigInt


// JavaScript is dynamically typed, not statically typed.

// 🔍 What does "dynamically typed" mean?
// You don’t declare variable types. The type is determined at runtime based on the value.

// A variable can hold any type of value at different times:


let x = 10;      // x is a number
x = "hello";     // now x is a string
x = true;        // now x is a boolean

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 2345678909876234564567890098765n;
console.log(typeof bigNumber);

//Reference (Non Primitive)

//Array,Objects,Functions

const heroes = ["shaktiman","naagraj","doga"];

let myObj = {
    name:"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("hello world\n")
}
myFunction();

console.log(typeof outsideTemp)
console.log(typeof null)
console.log(typeof undefined);
console.log(typeof myFunction);
console.log(typeof heroes)

//link for further reading 
//https://262.ecma-international.org/5.1/#sec-11.4.3