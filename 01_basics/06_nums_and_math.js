const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 1123.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

//++++++++++++++++++++++  Maths  ++++++++++++++++++++++=

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(9.7));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.sqrt(8));
console.log(Math.min(6,7,4,3));
console.log(Math.max(7,8,5,2));

console.log(Math.random()) // Math.random() => gives random number ranging from 0 to 1
console.log((Math.floor(Math.random()*10))+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+min)