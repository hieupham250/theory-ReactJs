class Vehicle {
    public name:string
    protected year: number
    private company: string
    readonly id:number
    constructor(name:string, year:number, company:string, id:number){
        this.name = name
        this.year = year
        this.company = company
        this.id = id
    }
    displayInfo():void{
        console.log("ID:", this.id);
        console.log("name:", this.name);
        console.log("year:", this.year);
        console.log("company:", this.company);
    };
}

let entity = new Vehicle("visson", 2024, "visson", 1)
entity.displayInfo();