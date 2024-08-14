let firstName: string = "hiếu";
let lastName: string = "phạm";
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
let fullName: string = lastName + " " + firstName;
console.log(fullName);
