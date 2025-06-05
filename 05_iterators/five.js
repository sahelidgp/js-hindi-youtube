const coding = ["js","ruby","java","python","cpp"];


// coding.forEach( function(val){
//     console.log(val);
// })

//call back function does not have name 

//arow function
coding.forEach( (item) =>{
   // console.log(item);
})

//another way
 
function printMe(item){
    //console.log(item)
}

//coding.forEach(printMe); // only give the reference dont execution 

coding.forEach( (item,index,arr) => {
   // console.log(item, index,arr);
})
// array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
         languageName: "python",
        languageFileName: "py"
    },
    {
         languageName: "java",
        languageFileName: "java"
    },
]
//for iterating in object
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
} )
