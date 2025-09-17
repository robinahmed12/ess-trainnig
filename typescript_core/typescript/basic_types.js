var myName = "3";
var score = 5;
var isPaid = true;
var fruits = ["apple", "banana", "guava"];
// object
var obj = {
    user: "robin",
    Id: 3,
    isAdmin: true,
};
// console.log(obj);
var userData = {
    email: "user@email.com",
    isLoggedIn: true,
    userId: 4,
    location: "cumilla",
};
// console.log(userData);
var employee = {
    name: "harry",
    position: "developer",
    salary: 40,
    skills: ["javascript", "react", "next js"],
};
// console.log(employee);
// function
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(5, 6));
var userInfo = function (name) {
    return "user name is ".concat(name);
};
console.log(userInfo("robin"));
function createUser(user) {
    console.log("User Name: ".concat(user.name, ", Email: ").concat(user.email, ", Logged In: ").concat(user.isLoggedIn));
}
createUser({ name: "Robin" });
function consoleErr(err) {
    console.log(err);
}
function handleErr(err) {
    throw err;
}
handleErr("Something went wrong!");
