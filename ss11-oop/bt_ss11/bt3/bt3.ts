class Person {
    name: string
    constructor(name:string){
        this.name = name
    }
    displayInfo(){
        console.log(`name: ${this.name}`);
    }
}

class Student extends Person {
    id: number
    constructor(name:string, id:number){
        super(name)
        this.name = name
        this.id = id
    }
}

let student = new Student("Hiếu Phạm", 2)
student.displayInfo()