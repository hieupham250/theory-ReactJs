class Shape {
    calculateArea(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let rectangle = new Rectangle(5, 10);
let circle = new Circle(7);

console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Diện tích hình tròn:", circle.calculateArea());