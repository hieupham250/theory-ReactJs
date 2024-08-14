"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`ID của Phòng ban: ${this.id}`);
        console.log(`Tên Phòng ban: ${this.name}`);
    }
}
let department = new Department(1, 'Phòng IT', ['Hiếu', 'Nam', 'Dương']);
department.describe();
