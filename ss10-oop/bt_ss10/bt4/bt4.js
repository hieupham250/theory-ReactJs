"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    displayInfo() {
        console.log("ID:", this.id);
        console.log("name:", this.name);
        console.log("year:", this.year);
        console.log("company:", this.company);
    }
    ;
}
let entity = new Vehicle("visson", 2024, "visson", 1);
entity.displayInfo();
