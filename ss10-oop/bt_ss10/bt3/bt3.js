"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("name:", this.name);
        console.log("company:", this.company);
        console.log("phone:", this.phone);
    }
}
let entity = new Employee("Hiếu Phạm", "lính đánh thuê", 12345789);
entity.printInfo();
