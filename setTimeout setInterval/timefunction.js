console.log("set Timeout & Set Interval")
// settimeout time peroid ke baad
// let a = setTimeout(()=>{
//     console.log("I am inside settimeout")
// },3000);
// let b = prompt("DO you want to show settimeout ")
// if ( b == 'n'){
//     clearTimeout(a)
// }

// How to pass Parameter in settimeout
function sum(a,b,c){
    console.log("sum: "+(a+b+c))
}
// setTimeout(sum,2000,1,2,7)

// Setinterval Repeats after some interval
// let x = setInterval(()=>{
//     console.log("hi Kaise hai app log")
// },2000)

// setTimeout(()=>{
//     clearInterval(x)
// },5000)
setInterval(sum,2000,1,2,3)