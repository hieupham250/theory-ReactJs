"use strict";
function square(input) {
    if (Array.isArray(input)) {
        return input.map((value) => value * value);
    }
    else {
        return input * input;
    }
}
console.log(square(6));
console.log(square([5, 4, 3, 2]));
