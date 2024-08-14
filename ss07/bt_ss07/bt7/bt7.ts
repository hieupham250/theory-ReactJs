// Định nghĩa lớp Student
interface Student {
    id: number;
    name: string;
    class: string;
}

const students: Student[] = [
    { id: 1, name: "Alice", class: "A" },
    { id: 2, name: "Bob", class: "B" },
    { id: 3, name: "Charlie", class: "A" },
    { id: 4, name: "David", class: "C" },
    { id: 5, name: "Emma", class: "A" }
];

function filterStudentsByClass(studentArray: Student[], className: string): Student[] {
    return studentArray.filter(student => student.class === className);
}

// Sử dụng hàm để lọc sinh viên trong lớp A
const classAStudents = filterStudentsByClass(students, "A");
console.log("Sinh viên trong lớp A:", classAStudents);
