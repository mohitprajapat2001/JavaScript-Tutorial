console.log("Array Mastery");
//Array Declare
// let myarray = ['mohit',1,75,20,23,'subscribe'];
//length
// console.log(myarray.length)

//Print last Index of Array
// console.log(myarray[myarray.length-1])

// Array Declare Method 2
// let myarray = new  Array ('mohit',1,75,20,23,'subscribe');

// Basic Array Function

// push
// console.log(myarray.push('hello'))

//pop
// console.log(myarray.pop(1))
// console.log(myarray.pop(1))

// Shift
// console.log(myarray.shift(1))

//Unshift
// console.log(myarray.unshift("Hello"))

// IndexOf
// console.log(myarray.indexOf(1,2))

let newarray = [{
    name: "Mohit",
    age: 21
}, {
    name: "Yash",
    age: 23
}, {
    name: "Yatish",
    age: 26
},]

// Find Method
// console.log(newarray.find(function(element) {
//     return element.age > 23
// }))


// Arrow Function
// console.log(newarray.find((element) => {
//     return element.age === 23
// }))

let name1 = ['harshit', 'yash', 'parth', 'shakti']
let name2 = ['mohit', 'Neha', 'lata', 'manish']

// Concat Function
// console.log(name1.concat(name2))

// slice
// console.log(name1.concat(name2).slice(1,6))

// split
// console.log(name1[0].split(''))

// Join
// console.log(name1[0].split('').join('-'))

// loop
// 1 method
// for (let i in name1){
//     console.log(name1[i])
// }

// 2 Method
// for (let i of name1){
//     console.log(i)
// }


// console.log(newarray)


// Advance ******

let cities = [{
    city: "Mumbai",
    population: 20961000
}, {
    city: "New York",
    population: 8804190
}, {
    city: "London",
    population: 9648000
}]

// Filter ****
// console.log(cities.filter(city => city.population == 20961000))
// console.log(newarray.find(function(element) {
//     return element.age > 23
// }))

// Map ****
let population = cities.map(city => city.population * 2)
console.log(population)