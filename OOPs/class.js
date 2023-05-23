console.log("JS Class Tutorial");
//Class is a Special Constructor Function Used to Create Objects
//Class Syntax
// class User{
//     constructor(firstname, lastname, age){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.age = age
//     }
// }
// //Object Create Using Class
// const user1 = new User('Yash', 'Shiva', 22)
// console.log(user1)


//Getter, Setter
class products{
    constructor(itemName, price, discount){
        console.log('This is '+itemName)
        this.itemName = itemName
        this.price = price
        this.discount = discount
    }
    get discountprice(){
        return this.discount+'% Discount is Available'
    };
    set setdiscount(value){
        this.discount = value
    }
    //function Create
    discountedprice(){
        return this.price-this.discount*this.price/100;
    }
}
class furniture extends products{
    constructor(itemName, price, discount, type){
        //Super Method Call Parent  Class Constructor
        super(itemName, price, discount)
        this.type = type
    }
}
// const laptop = new products("Asus", "100000", '40')
// console.log(laptop)

const chair = new furniture("Chair", "999", '20', 'Woddden')
console.log(chair)
