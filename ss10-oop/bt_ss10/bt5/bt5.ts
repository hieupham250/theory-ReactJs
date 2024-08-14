class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];
    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe(): void {
        console.log(`ID của Phòng ban: ${this.id}`);
        console.log(`Tên Phòng ban: ${this.name}`);
    }
}
let department = new Department(1, 'Phòng IT', ['Hiếu', 'Nam', 'Dương']);
department.describe();
