"use strict";
function identity(arg) {
    return arg;
}
let result1 = identity("Hiếu");
console.log(result1);
let result2 = identity(123);
console.log(result2);
let result3 = identity(true);
console.log(result3);
let result4 = identity({ name: "Hiếu phạm" });
console.log(result4);
let result5 = identity([1, "two", true]);
console.log(result5);
