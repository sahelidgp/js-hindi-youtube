// if
const temperature = 40;

// if(temperature < 50){
//     console.log("less than 50");
// }
// else {
//     console.log("greater than or equal to 50");
// }

const score = 200

// if(score > 100){
//     let power  = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power :${power}`)


const balance = 1000


//basic if-else

// if(balance > 500)console.log("test"),console.log("test2");// implicit scope // not recommended

// if(balance < 500){
//     console.log("less than 500");
// }
// if(balance < 700){
//     console.log("less than 700");
// }
// if(balance < 900){
//     console.log("less than 900");
// }
// if(balance < 1200){
//     console.log("less than 1200");
// }
// if(balance < 1500){
//     console.log("less than 1500");
// }

const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User loggedIn");
}