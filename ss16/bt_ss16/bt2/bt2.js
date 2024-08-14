"use strict";
function convert(arr, x, y) {
    if (x < 0 || x >= arr.length || y < 0 || y >= arr.length) {
        console.log("lỗi");
        return;
    }
    else {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    return arr;
}
console.log(convert([1, 2, 3, 4, 5], 0, 4));
