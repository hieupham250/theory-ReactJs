"use strict";
function test(arg) {
    return arg;
}
console.log(test(123));
console.log(test("hello"));
console.log(test(true));
console.log(test([1, 2, 3]));
console.log(test({ key: "value" }));
