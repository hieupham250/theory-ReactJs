"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Đã gửi ${amount} vào tài khoản ${this.accountNumber}.`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log(`Số dư trong tài khoản ${this.accountNumber} không đủ.`);
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        const monthlyInterest = (this.balance * this.interestRate) / 100;
        console.log(`Tiền lãi hàng tháng cho tài khoản ${this.accountNumber}: ${monthlyInterest}`);
        return monthlyInterest;
    }
}
const savings = new SavingsAccount("123456789", 1000, 0.5);
//lãi hàng tháng
const monthlyInterest = savings.calculateInterest(); // 5
savings.deposit(500);
// Lãi suất hàng tháng mới
const newMonthlyInterest = savings.calculateInterest(); // 7.5
// rút tiền
savings.withdraw(2000);
