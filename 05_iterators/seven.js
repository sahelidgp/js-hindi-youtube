const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//map -> call back function
//automatically returns
//const newNums = myNumbers.map( (num) => (num>3))
//console.log(newNums)

//chaining

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num)=> num>=40)
console.log(newNums)