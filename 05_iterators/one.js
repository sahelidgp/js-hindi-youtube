//loop
// for(let i=0;i<=10;i++){
//     const element = i;
//     if(element  == 5){
//         console.log("5 is best number ");
//     }
//     console.log(element);
// }

// for(let  i =1;i<=10;i++){
//     console.log(`Outer loop value : ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);

//         console.log(i + '*' + j + '=' + i*j)
//     }
//}


//loop in array

let myArr = ["flash","batman","superman"];

//console.log(myArr.length);

for(let i=0;i<myArr.length;i++){
    const element = myArr[i];
    //console.log(element);
}

//break and continue

for(let i=1;i<=20;i++){
    if(i === 5){
        console.log(`5 is detected`);
        break;
    }
    console.log(`Value of i is ${i}`);
}
for(let i=1;i<=20;i++){
    if(i === 5){
        console.log(`5 is detected`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}