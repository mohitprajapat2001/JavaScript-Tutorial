console.log("My Object Exercise");

//Exercise 1
//Object of Product 
//Product Name, Price, Quantity, Discount, Selling Function Return Selling Price
//Simple Object , Factory Function, Constructor

// const product = {
//     productName : "PS5",
//     Price : 10000,
//     Quantity : 5,
//     Discount : 30,
//     get SellingPrice(){
//         return this.Price-(this.Price*(this.Discount/100));
//     }
// }
// console.log(product.SellingPrice)

//Factory Function

// function createProduct(productName, Price,  Quantity, Discount){
//     return {
//         productName : productName,
//         Price : Price,
//         Quantity : Quantity,
//         Discount : Discount,
//         get SellingPrice(){
//             return this.Price-(this.Price*(this.Discount/100));
//         }
//     }
// }
// const flower = createProduct('flowers', 100, 5, 10);
// console.log(flower)
// console.log(flower.SellingPrice)

//Constructor

// function productConstructor(productName, Price,  Quantity, Discount){
//     this.productName = productName
//     this.Price = Price
//     this.Quantity = Quantity
//     this.Discount = Discount
//     this.sellingPrice = Price - (Price * (Discount / 100));
// }
// const Watch = new productConstructor("Watch", 999, 40, 50);
// console.log(Watch)
// console.log(Watch.sellingPrice)





///Exercise 2

const myobj = {
    "word": "example",
    "results": [
        {
            "definition": "a representative form or pattern",
            "partOfSpeech": "noun",
            "synonyms": [
                "model"
            ],
            "typeOf": [
                "representation",
                "internal representation",
                "mental representation"
            ],
            "hasTypes": [
                "prefiguration",
                "archetype",
                "epitome",
                "guide",
                "holotype",
                "image",
                "loadstar",
                "lodestar",
                "microcosm",
                "original",
                "paradigm",
                "pilot",
                "prototype",
                "template",
                "templet",
                "type specimen"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "I profited from his example"
            ]
        },
        {
            "definition": "something to be imitated",
            "partOfSpeech": "noun",
            "synonyms": [
                "exemplar",
                "good example",
                "model"
            ],
            "typeOf": [
                "ideal"
            ],
            "hasTypes": [
                "pacemaker",
                "pattern",
                "beauty",
                "prodigy",
                "beaut",
                "pacesetter"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ]
        },
        {
            "definition": "an occurrence of something",
            "partOfSpeech": "noun",
            "synonyms": [
                "case",
                "instance"
            ],
            "typeOf": [
                "happening",
                "natural event",
                "occurrence",
                "occurrent"
            ],
            "hasTypes": [
                "clip",
                "mortification",
                "piece",
                "time",
                "humiliation",
                "bit"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "but there is always the famous example of the Smiths"
            ]
        },
        {
            "definition": "an item of information that is typical of a class or group",
            "partOfSpeech": "noun",
            "synonyms": [
                "illustration",
                "instance",
                "representative"
            ],
            "typeOf": [
                "information"
            ],
            "hasTypes": [
                "excuse",
                "apology",
                "specimen",
                "case in point",
                "sample",
                "exception",
                "quintessence",
                "precedent"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ],
            "examples": [
                "this patient provides a typical example of the syndrome",
                "there is an example on page 10"
            ]
        },
        {
            "definition": "punishment intended as a warning to others",
            "partOfSpeech": "noun",
            "synonyms": [
                "deterrent example",
                "lesson",
                "object lesson"
            ],
            "typeOf": [
                "monition",
                "admonition",
                "word of advice",
                "warning"
            ],
            "derivation": [
                "exemplary"
            ],
            "examples": [
                "they decided to make an example of him"
            ]
        },
        {
            "definition": "a task performed or problem solved in order to develop skill or understanding",
            "partOfSpeech": "noun",
            "synonyms": [
                "exercise"
            ],
            "typeOf": [
                "lesson"
            ],
            "examples": [
                "you must work the examples at the end of each chapter in the textbook"
            ]
        }
    ],
    "syllables": {
        "count": 3,
        "list": [
            "ex",
            "am",
            "ple"
        ]
    },
    "pronunciation": {
        "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
}

console.log(myobj)
const list = document.querySelector("ul");
for (let i = 0; i < myobj.results.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = myobj.results[i].definition;
    list.appendChild(listItem);
}