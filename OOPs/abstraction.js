console.log("Abstraction JS Example");
//Abstraction 
//Abstraction is a way to show only important data internal details is hide
class employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
        this.getuserdetails = function () {
            console.log(this.name + " age is " + this.age)
            finalsalary();
        }
        let bonus = 5000;
        let finalsalary = function () {
            let final = salary + bonus;
            console.log('Final Salary ' + final)
        }
    }
}
const emp1 = new employee('ritik', 22, 10000);
console.log(emp1)