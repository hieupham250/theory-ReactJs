"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Bicycle: ${this.name}, ID: ${this.id}, Gear: ${this.gear}`);
    }
}
const myBicycle = new Bicycle("Xe oto", 20, 12345, 3);
myBicycle.speedUp(10);
myBicycle.slowDown(5);
myBicycle.showSpeed();
myBicycle.showInfo();
