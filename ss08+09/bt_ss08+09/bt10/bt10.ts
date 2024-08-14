type Person = {
    name: string;
    age: number;
};

interface Employee extends Person {
    employeeId: number;
}

let employee: Employee = {
    name: "Hiếu Phạm",
    age: 20,
    employeeId: 180904,
};


console.log(employee.name);
console.log(employee.age);
console.log(employee.employeeId);
