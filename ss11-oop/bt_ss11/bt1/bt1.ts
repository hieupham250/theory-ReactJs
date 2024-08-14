class Employee {
    public name: string
    protected company: string
    private phone: string
    constructor(name:string, company:string, phone:string){
        this.name = name
        this.company = company
        this.phone = phone
    }
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`company: ${this.company}`);
        console.log(`phone: ${this.phone}`);
    }
}

class Manager extends Employee {
    teamSize: string
    constructor(name:string, company:string, phone:string, teamSize:string){
        super(name, company, phone)
        this.name = name
        this.company = company
        this.phone = phone
        this.teamSize = teamSize
    }
}

let entity = new Manager("Hiếu Phạm", "lính đánh thuê", "0123456789", "lớn")
entity.printInfo()