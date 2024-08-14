class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
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
