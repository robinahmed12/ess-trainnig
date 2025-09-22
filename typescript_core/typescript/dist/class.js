"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryItem {
    title;
    author;
    isAvailable;
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed`);
        }
        else {
            console.log(`${this.title}  currently unavailable`);
        }
    }
    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has  been return`);
    }
}
class Book extends LibraryItem {
    genre;
    constructor(title, author, genre) {
        super(title, author);
        this.genre = genre;
    }
    getDetails() {
        console.log(`${this.title} by ${this.author} [Genre: ${this.genre}]`);
    }
}
class DVD extends LibraryItem {
    duration;
    constructor(title, author, duration) {
        super(title, author);
        this.duration = duration;
    }
    getDetails() {
        console.log(`DVD: ${this.title} by ${this.author} [Duration: ${this.duration}]`);
    }
}
const book1 = new Book("Atomic Habits", "james clark", "self-help");
const dvd1 = new DVD("Inception", "Nolan", 148);
book1.getDetails();
book1.borrow();
book1.returnItem();
dvd1.getDetails();
dvd1.borrow();
//# sourceMappingURL=class.js.map