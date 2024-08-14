class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    protected slowDown(amount: number): void {
        this.speed -= amount;
    }

    protected speedUp(amount: number): void {
        this.speed += amount;
    }

    protected showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
        console.log(`Bicycle: ${this.name}, ID: ${this.id}, Gear: ${this.gear}`);
    }
}

const myBicycle = new Bicycle("Xe oto", 20, 12345, 3);

myBicycle.speedUp(10);

myBicycle.slowDown(5);


myBicycle.showSpeed();
myBicycle.showInfo();
