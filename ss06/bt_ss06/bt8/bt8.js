"use strict";
let firstName = "hiếu";
let lastName = "phạm";
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
let fullName = lastName + " " + firstName;
console.log(fullName);
