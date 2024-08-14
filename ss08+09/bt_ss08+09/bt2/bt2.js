"use strict";
function validatePerson(input) {
    if (typeof input.name === "string" &&
        typeof input.age === "number" &&
        typeof input.address === "object" &&
        input.address !== null) {
        return true;
    }
    else {
        return false;
    }
}
let person = {
    name: "Hiếu",
    age: 20,
    address: { street: "Hà Đông", city: "Hà Nội" }
};
let person2 = {
    name: 100,
    age: "20",
    address: "Hà Nội"
};
console.log(validatePerson(person));
console.log(validatePerson(person2));
