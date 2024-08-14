class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Đã gửi ${amount} vào tài khoản ${this.accountNumber}.`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`Số dư trong tài khoản ${this.accountNumber} không đủ.`);
        }
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        const potentialBalance = this.balance - amount;
        if (potentialBalance >= -this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`Rút không thành công, vượt quá hạn mức cho phép.`);
        }
    }
}

let checking = new CheckingAccount("987654321", 1000, 500);
checking.withdraw(1500); // Đã rút 1500 từ tài khoản 987654321.

// Tiếp tục rút tiền vượt quá hạn mức cho phép
checking.withdraw(1000); // Rút không thành công, vượt quá hạn mức cho phép.

