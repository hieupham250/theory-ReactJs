class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    viewBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
}

let book1 = new Book("Harry Potter", "J.K. Rowling");
let book2 = new Book("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh");
let book3 = new Book("Thao túng tâm lý ", "Thao túng tâm lý ");
let book4 = new Book("đắc nhân tâm", "Dale Carnegie");
let book5 = new Book("Dế mèn", "Tô Hoài");

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
