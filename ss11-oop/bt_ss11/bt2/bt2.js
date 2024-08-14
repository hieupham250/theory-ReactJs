"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`company: ${this.company}`);
        console.log(`phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`company: ${this.company}`);
        console.log(`phone: ${this.phone}`);
        console.log(`teamSize: ${this.teamSize}`);
    }
}
let entity = new Manager("Hiếu Phạm", "lính đánh thuê", "0123456789", "lớn");
entity.printInfo();
