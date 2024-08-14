"use strict";
/*
    viết 1 function nhận vào tham số, nếu là số in ra số
    nếu là string in ra string
*/
// với generic
function test(param) {
    if (Array.isArray(param)) {
        return [param[param.length - 1]];
    }
    else {
        return [param];
    }
}
console.log(test(["a", "b", "c"]));
console.log(test([5, 6, 7, 8, 9]));
