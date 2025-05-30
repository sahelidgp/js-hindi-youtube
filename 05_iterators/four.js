const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}
// for in loop in object
for(const key in myObject){
    //console.log(key);
}

for(const key in myObject){
   // console.log(myObject[key])
}

for(const key in myObject){
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for in loop in array
const programming = ["js","rb","py","java","cpp"];

for(const key in programming){
    //console.log(programming[key]);
}

//for in loop in map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for(const key in map){
    //console.log(map[key]); // map is not iterable 
}

//object -> for in
//array -> for of