abstract class LibraryItem {
  protected title: string;
  protected author: string;
  private isAvailable: boolean;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  public borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed`);
    } else {
      console.log(`${this.title}  currently unavailable`);
    }
  }

  public returnItem(): void {
    this.isAvailable = true;
    console.log(`${this.title} has  been return`);
  }

  public abstract getDetails(): void;
}

class Book extends LibraryItem {
  private genre: string;

  constructor(title: string, author: string, genre: string) {
    super(title, author);
    this.genre = genre;
  }

  public getDetails(): void {
    console.log(`${this.title} by ${this.author} [Genre: ${this.genre}]`);
  }
}

class DVD extends LibraryItem {
  private duration: number;

  constructor(title: string, author: string, duration: number) {
    super(title, author);
    this.duration = duration;
  }
  public getDetails(): void {
    console.log(
      `DVD: ${this.title} by ${this.author} [Duration: ${this.duration}]`
    );
  }
}

const book1 = new Book("Atomic Habits", "james clark", "self-help");
const dvd1 = new DVD("Inception", "Nolan", 148)

book1.getDetails()
book1.borrow()
book1.returnItem()

dvd1.getDetails()
dvd1.borrow()
