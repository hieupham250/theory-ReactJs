"use strict";
function stringOrArray(input) {
    if (Array.isArray(input)) {
        return input.forEach((value) => console.log(value));
    }
    else {
        return console.log(input);
    }
}
stringOrArray("hiếu");
stringOrArray(["a", "b", "c"]);
