// const tinderUser = new Object()
//singleton
const tinderUser = {}
console.log(tinderUser) 

tinderUser.id = "123abc";
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2};

// console.log(obj3);

const obj3 = Object.assign({},obj1,obj2); // {} => this is target rests are sources
// console.log(obj3) 

const target = {a: 1 ,b: 2};
const source = {b: 4, c: 5};

// const returnedTarget = Object.assign(target,source);

// console.log(returnedTarget);
// console.log(target)
// console.log(source)

// console.log(returnedTarget == target)

//using spread operator

const returnedTarget = {...target,...source}
// console.log(returnedTarget) 
// console.log(target)

//array objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    }
]

// console.log(users[0])
// console.log(users[0].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // return array of keys
// console.log(Object.values(tinderUser)) //return array of values
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

//object destructuring

const  {courseInstructor: instructor} = course

console.log(instructor);

//json 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//The term URL stands for Uniform Resource Locator. It is the address used to access resources on the internet.

// Example of a URL:
// arduino
// Copy
// Edit
// https://www.example.com/index.html
// Breakdown:
// https → Protocol (how the resource is accessed)

// www.example.com → Domain name (where the resource is hosted)

// /index.html → Path (specific resource or file on the server)