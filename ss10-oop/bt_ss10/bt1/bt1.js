"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let entity1 = new Vehicle("oto", 2024, "toyota");
let entity2 = new Vehicle("xe máy", 2024, "visson");
console.log("===============");
console.log("entity1");
console.log("name:", entity1.name);
console.log("year:", entity1.year);
console.log("hãng:", entity1.company);
console.log("===============");
console.log("entity2");
console.log("name:", entity2.name);
console.log("year:", entity2.year);
console.log("hãng:", entity2.company);
console.log("===============");
