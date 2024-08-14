"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    displayInfo() {
        this.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
const laptop = new Electronics("Laptop", 12000000, "dell");
laptop.displayInfo();
