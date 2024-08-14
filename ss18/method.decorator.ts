/*
    trang trí cho phương thức
    phương thức và hàm khác nhau như thế nào? 
    ==> hàm là những function tự định nghĩa, phương thức dùng trong đối tượng hoặc lớp

    map, filter, forEach là hàm hay phương thức
    ==> để dùng decorator cho function
    thì phải dùng @ đặt trước tên phương thức
*/
// tạo function decor cho function sum trong class Test
// function decor phải có 3 đối số
function decorMethod(target:any, propertKey:string,desciptor:PropertyDescriptor){
    console.log(target);
    console.log(propertKey);
    console.log(desciptor);
    // trong descipttor có chứa 1 đối tượng có chứa thuộc tính value
    // nhờ cài value thì mới đi decor trong method
    desciptor.value = function (a: number, b:number) {
        return (a+b)*2
    }
}
class Test {
    // viết phương thức cho class Test
    // tạo function tính tổng
    @decorMethod
    sum1(a:number, b:number) {
        return a + b
    }
    sum2(a:number, b:number) {
        return a + b
    }
}

let sum1 = new Test();
console.log(sum1.sum1(1,2));

/*
    decorator
    với accessor:
    với param
    với property
*/