class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculateCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);

console.log("Bán kính:", circle.getRadius());
console.log("Chu vi:", circle.calculateCircumference());
console.log("Diện tích:", circle.calculateArea());

circle.setRadius(7);
console.log("Bán kính sau khi cập nhật:", circle.getRadius());
console.log("Chu vi sau khi cập nhật:", circle.calculateCircumference());
console.log("Diện tích sau khi cập nhật:", circle.calculateArea());
