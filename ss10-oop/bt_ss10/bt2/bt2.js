"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
let entity1 = new Student(1, 20, "hieupham@gmail.com");
let entity2 = new Student(2, 20, "phamhieu@gmail.com");
students.push(entity1, entity2);
students.forEach((student, index) => {
    console.log(`Sinh viên ${index + 1}:`);
    console.log("ID:", student.id);
    console.log("Age:", student.age);
    console.log("Email:", student.email);
    console.log("===============");
});
