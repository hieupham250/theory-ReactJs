type Name = {
    name: string
}

type Address = {
    address: string
}

type Combine = Name & Address;
let combine: Combine = {
    name: "Hiếu Phạm",
    address: "hà nội",
}
console.log(combine);