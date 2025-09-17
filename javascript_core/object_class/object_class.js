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
recipeOne.price = 239999;
// console.log(recipeOne.price);

// console.log(recipeTwo === recipeOne);false
// console.log(recipe instanceof taheri); false

// class Market {
//   constructor(name, location, area) {
//     this.name = name;
//     this.location = location;
//     this.area = area;
//   }

//   buyNow (){
//     console.log(`let's go ${this.name} to buy some vegetable`);

//   }

// }

// class ranirBazar extends Market {
//     constructor(name , location , area , crowd){
//         super(name , location , area)
//         this.crowd = crowd
//     }
// }

// const poduwarBazar = new Market("poduwarBazar", "Bissoroad", 1222);
// console.log(poduwarBazar);
// poduwarBazar.buyNow()
// const ranirBazars = new ranirBazar ("ranirbazar", "cumilla", 500, "huge")
// console.log(ranirBazars);

class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} price is ${this.price}`;
  }
}

class Clothes extends Products {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
}

class Mobile extends Products {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }
}

const tShirt = new Clothes("gucci", "$122", "L");
console.log(tShirt);

const userData = {
  name: "mahfuz",
  age: 45,
  location: {
    district: "b.baria",
    thana: "bijoy nager",
    village: "goal nager",
  },
};
const user2 = {
  name: "abul",
  country: "uganda"
}
console.log(userData.location.village);
userData.location.thana = "adarsho sadar"
// console.log(userData);
const user3 = {...userData , ...user2}
// console.log(user3);

class Road {
  constructor (length, location){
    this.length = length
    this.location = location
  }
}

class mainRoad extends Road {
  constructor(length, location, isBeautiful){
    super(length , location)
    this.isBeautiful = isBeautiful
  }

  get location (){
    return this._location
  }

  set location (value){
    return this._location = value
  }
}

const ecbRoad = new mainRoad ("110m", "mirpur", "yes")
console.log(ecbRoad);
console.log(mainRoad instanceof Road);
console.log(ecbRoad.location);






