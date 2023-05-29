console.log("JS Polymorphism");
//Polymorphism
//Poly - Many | Morphism - Form
//Many Forms - Polymorphism have ability to create multiple instance of method & variables

//Method Overriding
class animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(this.name+" Please Specify Animal")
    }
}
class dog extends animal {
    speak(){
        console.log("Woof! Woof!")
        super.speak();
    }
}
const c = new animal('tom');
const d = new dog('tuffy');
c.speak()
d.speak()