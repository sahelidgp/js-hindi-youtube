// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0 ,23)

// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString())

let amarCreatedDate = new Date("01-14-2023");
console.log(amarCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); //ms 

console.log(myTimeStamp);
console.log(amarCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); // month starts from 0 (january = 0)

console.log(newDate.getDay()); // day starts from mon -> 0

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone:''
})