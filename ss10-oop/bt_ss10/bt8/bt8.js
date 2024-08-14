"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let rectangle = new Rectangle(5, 10);
console.log("Thông tin ban đầu:");
console.log("Chiều dài:", rectangle.getWidth());
console.log("Chiều rộng:", rectangle.getHeight());
console.log("Chu vi:", rectangle.calculatePerimeter());
console.log("Diện tích:", rectangle.calculateArea());
rectangle.setWidth(7);
rectangle.setHeight(12);
console.log("\nThông tin sau khi cập nhật:");
console.log("Chiều dài:", rectangle.getWidth());
console.log("Chiều rộng:", rectangle.getHeight());
console.log("Chu vi:", rectangle.calculatePerimeter());
console.log("Diện tích:", rectangle.calculateArea());
