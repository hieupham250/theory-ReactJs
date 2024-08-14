/*
    decorator : trang trí
    bản chất nó là hàm (funciton) nhằm bổ sung cho class, method,
    property cho đối tượng
    b1: trong file tsconfig.json
    decorator trong typescript chia làm 5 loại
    1. class
    2. method
    3. property
    4. param
    5. accessor
    ==> phạm vi tác dụng: MESTJS
    frontend và backend
*/

function sum(arr: number[]): number {
    let sum: number = 0;
    for (let i of arr) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum([1,2,3]));
