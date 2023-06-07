// const prompt=require("prompt-sync")({sigint:true});

console.log('Callback Tutorial');
// Synchronous Javascript
// let a = prompt("hello enter your name ");
// let b = prompt("hello enter your age ");
// let c = prompt("hello what color you like ");
// console.log("hello "+a+" your age is "+b+" and "+c+" is you favorite color");

// Asynchronous Javascript
// console.log("start");
// setTimeout(()=>{
//     console.log("Hello Bhai Kaise ho")
// },3000)
// console.log("end")

// Callback Functions
function setstyle(href, callback){
    let link = document.createElement('link')
    link.rel="stylesheet";
    link.href = href;
    link.onload = ()=>{
        console.log("Link Created "+href);
        callback(null,href);
    }
    link.onerror = ()=>{
        console.log("Error Aagai Bhai "+href);
        callback(new Error("Link Me Error Hai Boss"));
    }
    document.head.appendChild(link)
}
function doneHogya(error,src){
    if(error){
        console.log(error)
        return
    }
    console.log("Link Add Hogya Hai Boss "+src)
}


setstyle('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',doneHogya)
// setstyle('https://cdn.jsdelivrnpm/bootstrap@4.0.0/dist/css/bootstrap.min.css',doneHogya)
