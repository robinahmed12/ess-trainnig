"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryItem {
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
class LibraryUser {
    constructor(name) {
        this.name = name;
    }
    borrowItem(item) {
        console.log(`${this.name} is borrowing an item`);
        item.borrow();
    }
    returnItem(item) {
        console.log(`${this.name} is returning item`);
        item.returnItem();
    }
}
class Book extends LibraryItem {
    constructor(title, author, genre) {
        super(title, author);
        this.genre = genre;
    }
    getDetails() {
        console.log(`${this.title} by ${this.author} [Genre: ${this.genre}]`);
    }
}
class DVD extends LibraryItem {
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
//
const user = new LibraryUser("Robin");
user.borrowItem(book1);
user.returnItem(book1);
class Patient {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.medicalHistory = [];
    }
    addHistory(entry) {
        this.medicalHistory.push(entry);
    }
    getDetails() {
        return `${this.name}, age: ${this.age}`;
    }
}
class InsuredPatient extends Patient {
    constructor(name, age, provider) {
        super(name, age);
        this.insuranceProvider = provider;
    }
    getInsuranceInfo() {
        return `Insured by ${this.insuranceProvider}`;
    }
}
const Patient1 = new InsuredPatient("henry", 40, "blueberry");
Patient1.addHistory("Flue in 2020");
Patient1.addHistory("fractured arm in");
console.log(Patient1.getDetails());
console.log(Patient1.getInsuranceInfo);
class Order {
    constructor(orderId, items) {
        this.orderId = orderId;
        this.items = items;
    }
}
class onlineOrder extends Order {
    constructor(orderId, items, paymentMethod) {
        super(orderId, items);
        this.paymentMethod = paymentMethod;
    }
    process() {
        console.log(`Processing online order ${this.orderId} with ${this.paymentMethod}`);
    }
}
const orders = [
    new onlineOrder("ORD101", ["Phone"], "PayPal"),
    new onlineOrder("ORD102", ["Tablet", "Charger"], "Debit Card"),
    new onlineOrder("ORD103", ["Headphones"], "Credit Card"),
];
// Process all orders
orders.forEach((order) => order.process());
//
class watchList {
    constructor(name, releaseDate, boxOffice, grossCollection) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.boxOffice = boxOffice;
        this.grossCollection = grossCollection;
    }
    watchNow() {
        console.log(`${this.name} was too good`);
    }
}
class FavMovieList extends watchList {
    constructor(name, releaseDate, rating, boxOffice, grossCollection) {
        super(name, releaseDate, boxOffice, grossCollection);
        this.rating = rating;
    }
    newlyReleasedList() {
        console.log(`${this.name} was recently released`);
    }
}
// const w1 = new watchList
const fav1 = new FavMovieList("Avengers", 2002, 4.5, 1000, 500);
// console.log(fav1.boxOffice);
// console.log(fav1.grossCollection);
fav1.watchNow();
fav1.newlyReleasedList();
//# sourceMappingURL=class.js.map