const user ={
    username : "hitesh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username},  Welcome to Website`)
        console.log(this)
    }

}
// user.welcomeMessage() //hitesh,  Welcome to Website
// user.username = "Sam" // context change
// user.welcomeMessage() //Sam,  Welcome to Website

//console.log(this) //current context this refers to {} empty object under node enviornment
// in the browser engine the global object is window object

// function chai(){
//     console.log(this)
//     console.log(this.username) //undefiend

// }

//function expression

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }


//Arrow function

const chai = () =>{
    let username = "hitesh"
    console.log(this) // this is empty object innside the arrow function
}
// chai()

//basic arrow function
// const addtwonums = (num1,num2) => {
//     return num1+num2  //explicit return is used when we use curly braces

// }

//implicit return
// const addtwonums = (num1,num2) => num1+num2

const addtwonums = (num1,num2) =>(num1+num2) // implicit return when we use paranthesis
// console.log(addtwonums(3,4))

const printusername = () => ({username: "hitesh"})
console.log(printusername())


//Read this

// ✅ The expression { username: "hitesh" } is an object literal.

// Why the parentheses are important
// In arrow functions, curly braces {} can mean two different things:

// Syntax	Meaning
// () => {}	Function body (no return unless return is used)
// () => ({})	Returns an object literal