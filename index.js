// Loops in jS
// 1. For
// 2. While
// 3. do while
// 4. for in (Array, Dictionary)
// 5. for of (Array, Dictionary)


// For Loop

// for (let i = 0; i < 10; i++) {
//     //even Number
//     // if (i%2 == 0){
//     //     console.log(i);
//     // }
//     //Odd Number
//     if (i%2 != 0){
//         console.log(i);
//     }
// }

//while Loop
// let i = 10;
// while (i>=0){
//     console.log(i);
//     i--;
// }

//do while
// let i=0;
// do {
//     console.log("do while Loop")
//     i++;
// }
// while(i<10)


//for in loop

let user = {
    name:'Mohit',
    age:22,
    channel:'Subscribe'
}
//for in object
// for (let i in user){
//     console.log(i,user[i])
// }
let myarray = ['mohit','yash','neha','parth']
//for in array
// for (let i in myarray){
//     console.log(i,myarray[i])
// }

//for of loop !array

for (let j of myarray){
    console.log(j)
}