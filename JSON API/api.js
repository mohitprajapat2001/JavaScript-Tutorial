console.log("Working with APIs")
// https://catfact.ninja/fact
let myapi = fetch("https://catfact.ninja/fact")
myapi.then((value)=>{
    console.log(value)
    console.log(value.status)
    console.log(value.ok)
    return value.json()
}).then((result)=>{
    console.log(result.fact)
    let myp = document.createElement("p")
    myp.textContent = result.fact
    document.querySelector('body').appendChild(myp)
})