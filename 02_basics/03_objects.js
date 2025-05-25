// singleton
// Object.create  


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]:"%@#%",
    age: 18,
    location: "Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])
console.log(JsUser[mySym])

console.log(JsUser)

JsUser.email = "hitesh@chatgpt.com"

console.log(JsUser)

// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting);
// JsUser.greeting();

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());