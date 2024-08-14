class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    protected getDescription(): void {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    displayInfo(): void {
        this.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

const laptop = new Electronics("Laptop", 12000000, "dell");
laptop.displayInfo();
