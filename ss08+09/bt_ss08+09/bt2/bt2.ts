type Check = {
    name: string;
    age: number;
    address: object;
}

function validatePerson(input: any): boolean {
    if (typeof input.name === "string" && 
        typeof input.age === "number" && 
        typeof input.address === "object" &&
        input.address !== null) {
        return true;
    } else {
        return false;
    }
}

let person: Check = {
    name: "Hiếu",
    age: 20,
    address: { street: "Hà Đông", city: "Hà Nội" }
};

let person2: Check = {
    name: 100,
    age:"20",
    address: "Hà Nội"
}

console.log(validatePerson(person));
console.log(validatePerson(person2));