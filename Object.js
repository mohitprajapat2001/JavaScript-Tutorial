// console.log("Everything About Object");
// //Object is a colletion of data With Pair of key and value
// //Object is a Non Primitive Datatype

// const book1 = {
//     "bookName":"Ramayan",
//     "Author":"Valmiki",
//     "Description":"Victory of Shri Ram Over Ravan",
// }
// console.log(book1)
// console.log(book1.Description)

// const book2 = {
//     "bookName":"Mahabharat",
//     "Author":"Tulsidas",
//     "Description":"Shri Krishna ne Arjun ko Gita ka Gyann Diya Tha",
// }
// console.log(book2)
// console.log(book2.Description)

//Important-----
//Function Factory

// function createBook(title, Author, Description){
//     return {
//         "bookName":title,
//         "Author":Author,
//         "Description":Description,
//     }
// }
// const book1 = createBook("Mahabharat", "tulsidas", "Mahbharat Yudh Geeta Gyan");
// console.log(book1);

// const book2 = createBook("Ramayan", "Valmiki", "Shri Ram Kill Ravan And Save Mata Sita");
// console.log(book2);


//Constructor Method

function bookConstructor(title){
    this.title = title
    this.available = function() {
        console.log("Book is Available")
    }
}

const book1 = new bookConstructor("Ramayan");
book1.author = "Valmiki";
// console.log(book1)

const MyString = "Hello Guys Subscribe Bhi Karlo";
console.log(MyString)