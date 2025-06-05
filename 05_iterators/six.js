const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach( (item) =>{
//     console.log(item);

// })
 
// console.log(values); //undefined

const myNums = [1,2,3,4,5,6,7,8,9,10];

//implicit return
// const newNums = myNums.filter((num)=> num>4)// it returns values
//                             //  |
//                             // callback function

// console.log(newNums)


//explicit return if curly braces used
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums)


const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
//console.log(newNums);


const books = [
    {title: 'Book One', genre:'Fiction',publish: 1981,edition: 2004},
    {title: 'Book Two', genre:'Non-Fiction',publish: 1992 ,edition:2008},
    {title: 'Book Three', genre:'History',publish: 1999,edition:2007 },
    {title: 'Book Four', genre:'Non-Fiction',publish: 1989,edition:2010 },
    {title: 'Book Five ', genre:'Science',publish:2009 ,edition:2014 },
    {title: 'Book Six', genre:'Fiction',publish:1987 ,edition:2010 },
    
];

//const userBooks = books.filter( (bk) =>bk.genre === 'Non-Fiction')

const userBooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === 'Non-Fiction';
})
console.log(userBooks);