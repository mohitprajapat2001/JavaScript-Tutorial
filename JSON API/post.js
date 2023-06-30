console.log("Working with POST fetch methods")
let options = {
    method : "POST",
    headers : {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body : JSON.stringify({
        title: 'Mohit',
        body: 'Subscribe',
        userId: 1,
      })
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts/100')
.then((response) => response.json())
.then((json) => console.log(json));