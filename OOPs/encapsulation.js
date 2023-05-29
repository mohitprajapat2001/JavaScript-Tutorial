console.log("JS Tutorial Encapsulation")

//Encapsulation
//Encapsulation is the way of binding data and methods
//Encapsulation Provides Security
//Encapsulation Hides Methods From 3rd Party HAckers

class student {
    constructor() {
        var studentName;
        var studentMarks;
    }
    setname(studentName) {
        this.studentName = studentName;
    }
    setmarks(studentMarks) {
        if (studentMarks < 0 || studentMarks > 100) {
            alert("Invalid studentMarks");
        }
        else {
            this.studentMarks = studentMarks;
        }
    }
    getname() {
        return this.studentName
    }
    getmarks() {
        return this.studentMarks
    }
}
const s1 = new student();
console.log(s1);