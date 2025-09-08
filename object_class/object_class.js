// example 01

class User {
  constructor(name, loginCount, loggedIn) {
    this.name = name;
    (this.loginCount = loginCount), (this.loggedIn = loggedIn);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    return (this._name = value);
  }

  getAccess() {
    console.log(`${this.name} is a admin and get access`);
  }
}

class Admin extends User {
  constructor(name, loggedIn, isAdmin) {
    super(name, loggedIn);
    this.isAdmin = isAdmin;
  }
}

const userOne = new User("robin", 8, true);
// console.log(userOne.name);
const userTwo = new User("Raif", true, true);
// console.log(userTwo);
// userTwo.getAccess();

// example 2

class Sports {
  constructor(name, year, country) {
    (this.name = name), (this.year = year), (this.country = country);
  }

  get country() {
    return this._country;
  }

  set country(value) {
    return (this._country = value);
  }

  popularity() {
    console.log(`popularity of ${this.name} huge`);
  }
}

class cricket extends Sports {
  constructor(name, year, country, formate) {
    super(name, year, country);
    this.formate = formate;
  }
}

const cricket1 = new Sports("cricket ", 1996, "England", 3);
// console.log(cricket1);
// cricket1.popularity();
cricket1.name = "badminton";
// console.log(cricket1.name);

const football = new Sports("football", 1900, "Argentina");
// console.log(football);

// example 3

class recipe {
  constructor(name, item, test, price) {
    this.name = name;
    this.item = item;
    this.test = test;
    this.price = price;
  }

  cookedBy() {
    console.log(` ${this.item} is  cooked by ${this.name}`);
  }
}

class taheri extends recipe {
  constructor(name, item, test, price, ingredients) {
    super(name, item, test, price);
    this.ingredients = ingredients;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    return (this._price = value);
  }
}

const recipeOne = new recipe("shawon", "biriyani", "yummy", 180);
const recipeTwo = new recipe("robin", "polaw", "yummy", 170);
// console.log(recipeOne);
recipeOne.cookedBy();
// console.log(recipeOne.price);
recipeOne.price = 239999
// console.log(recipeOne.price);

// console.log(recipeTwo === recipeOne);false
// console.log(recipe instanceof taheri); false


