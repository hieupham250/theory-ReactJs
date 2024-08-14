"use strict";
const students = [
    { id: 1, name: "Alice", class: "A" },
    { id: 2, name: "Bob", class: "B" },
    { id: 3, name: "Charlie", class: "A" },
    { id: 4, name: "David", class: "C" },
    { id: 5, name: "Emma", class: "A" }
];
function filterStudentsByClass(studentArray, className) {
    return studentArray.filter(student => student.class === className);
}
// Sử dụng hàm để lọc sinh viên trong lớp A
const classAStudents = filterStudentsByClass(students, "A");
console.log("Sinh viên trong lớp A:", classAStudents);
