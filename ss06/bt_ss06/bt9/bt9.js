"use strict";
function removeDuplicates(str) {
    let result = '';
    for (let char of str) {
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}
let str1 = "banana";
let result1 = removeDuplicates(str1);
console.log(result1);
let str2 = "hello world";
let result2 = removeDuplicates(str2);
console.log(result2);
