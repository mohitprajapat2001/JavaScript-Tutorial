console.log("Inheritance JS Tutorial")

//Inheritance
// Inheritance is a way in OOP to Inherit the feature and method of parent class
class animal{
    constructor(name, speed){
        this.name = name 
        this.speed = speed
    }
    getspeed(){
        return console.log(this.name+' Runs with Speed '+this.speed)
    }
}
class monkey extends animal{
    jump(){
        return console.log(this.name+' can jump on tress')
    }
}
class lion extends (animal, monkey){
    roar(){
        return console.log(this.name+' Roar And King of Jungle')
    }
}
const ani = new animal('Tom',50);
// const lion = new animal('Lion',100);
console.log(ani)
const m = new monkey('ape',25)
console.log(m)
const l = new lion('mufasa',50)
console.log(l)