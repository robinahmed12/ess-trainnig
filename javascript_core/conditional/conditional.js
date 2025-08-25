// 1

let num = 10;
if (num > 10) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// 2

const number = 50;

if (number % 2 === 0) {
    console.log("number is event");
    
} else {
    console.log("number is add");
    
}

// 3

const age = 18

if (age >= 18 ) {
    console.log("eligible to vote");
    
} else {
    console.log("not eligible to vote");
    
}

// 4
const a = 50
const b = 70
if (a > b) {
    console.log("a is larger");
    
} else {
    console.log("b is larger");
    
}

// 5
const marks = 90

if (marks <= 90) {
    console.log("A");
    
} else if (marks <= 89) {
    console.log("B");
    
} else if (marks <= 79) {
    console.log("c");
    
}

// 6
const userName = "admin" 
let password = "1232"

if (userName === "admin" && password=== "1234") {
    console.log("log in  successfully");
    
} else if (userName !== "admin" && password === "1234"){
    console.log("invalid user name");
    
} else {
    console.log("password invalid");
    
}

// 7 ternary operator
const price =  80

price % 2 ? console.log("even"): console.log("odd")

// 8 
let year = 2002
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year , "year is leap year");
    
} else  {
    console.log( year ,"year is not leap year");
    
}
