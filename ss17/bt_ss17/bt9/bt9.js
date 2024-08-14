"use strict";
function flattenArray(arr) {
    let flattened = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flattenArray(item));
        }
        else {
            flattened.push(item);
        }
    }
    return flattened;
}
let arr = flattenArray([1, [2, [3, 4], 5], 6]);
console.log(arr);
