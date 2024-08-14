"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
}
let student = new Student("Hiếu Phạm", 2);
student.displayInfo();
