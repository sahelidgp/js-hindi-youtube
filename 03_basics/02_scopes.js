let a = 300 //global scope 
if(true){
    let a = 10
    const b = 20
    // var c = 30 // should be local scope but it is not so there arise the problem with var
    console.log("INNER :",a);
}

// console.log(a)
// console.log(b)
// console.log(a)

// for(let i=0;i<array.length;i++){
//     const element = array[i]; 
// }


//nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website)
    }
}

// console.log(username)


//++++++++++++++++++++interesting+++++++++++++++++++++
//addone(8)  ->  it is fine if we call the function before its definition 
function addone(num){
    return num+1;
}
console.log(addone(5))


//function expression

//addTwo(8) --> it will give error
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))