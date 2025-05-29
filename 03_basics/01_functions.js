function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("I");
    
}
// sayMyName()

// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
//     console.log(number1 + number2);
// }

//addTwoNumbers() // NAN

// addTwoNumbers(6,8); // 6 and 8 are arguments
// addTwoNumbers(3,null) // 3
// addTwoNumbers(3,"9") //39

// const result = addTwoNumbers(8,"9")
// console.log("Result: =",result ); //undefined


function addTwoNumbers(n1,n2){
    let result = n1+n2;
    return result;
    console.log("hitesh")
}
const result = addTwoNumbers(8,"90")
console.log("Result: =",result );

function loginUserMeassage(username = "sam"){ //default if no arguments is passed
    if(username === undefined){
        console.log("Please enter a username ");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMeassage())// sam just logged in

console.log(loginUserMeassage("Saheli")) // Saheli just logged in


// function calculateCartPrice(...num1){ //...rest operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500,900,1000))

function calculateCartPrice(val1,val2,...num){
    return num
}

// console.log(calculateCartPrice(200, 400, 500,900,1000))//[500,900,1000]

const user = {
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,4900,500,1000]))