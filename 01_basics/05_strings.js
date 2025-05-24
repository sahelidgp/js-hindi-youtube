const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
// Creates a String object, not a primitive string.
// However, for most purposes (like slicing), it behaves like a normal string:




//  h i t e s h - h c
//  0 1 2 3 4 5 6 7 8

console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,5);

// -8 => backwardly 8 steps
// slice(-8,5)  = slice(1,5)
console.log(anotherString);

const newStringOne = "   hitesh       ";
const afterTrim = newStringOne.trim(); //remove extra space
console.log(afterTrim);

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));