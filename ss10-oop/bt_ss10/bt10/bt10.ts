class Book {
    private title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    addBook(title: string, author: string, quantity: number = 1): void {
        if (title === this.title && author === this.author) {
            this.quantity += quantity;
            console.log(`${quantity} bản của ${title} by ${author} đã được thêm vào thư viện.`);
        } else {
            console.log(`${title} của ${author} đã được thêm vào thư viện.`);
        }
    }

    displayBookDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Quantity: ${this.quantity}`);
    }
}

const book1 = new Book("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh", 3);

book1.addBook("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh", 2);
book1.addBook("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh");

book1.displayBookDetails();
