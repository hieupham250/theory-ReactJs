"use strict";
/*
    tính đa hình là gì?
    cách triển khai?

*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Động vật kêu");
    }
}
class Dog extends Animal {
    // Override phương thức makeSound
    makeSound() {
        console.log("Chó sủa");
    }
}
// Lớp con Cat kế thừa từ Animal
class Cat extends Animal {
    // Override phương thức makeSound
    makeSound() {
        console.log("Mèo kêu");
    }
}
function animalMakeSound(animal) {
    animal.makeSound();
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
animalMakeSound(dog); // In ra "Chó sủa"
animalMakeSound(cat); // In ra "Mèo kêu"
// với overloading 
class Calculator {
    // Định nghĩa phương thức add
    add(x, y) {
        if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        }
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y;
        }
        if (Array.isArray(x)) {
            return x.reduce((acc, val) => acc + val, 0);
        }
        return NaN;
    }
}
const calc = new Calculator();
console.log(calc.add(1, 2)); // In ra: 3
console.log(calc.add('Hello', 'World')); // In ra: HelloWorld
console.log(calc.add([1, 2, 3, 4])); // In ra: 10
