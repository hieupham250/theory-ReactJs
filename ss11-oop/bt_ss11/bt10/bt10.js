"use strict";
class Shape {
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let rectangle = new Rectangle(5, 10);
let circle = new Circle(7);
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());
