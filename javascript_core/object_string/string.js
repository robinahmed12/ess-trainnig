const fullName = "Jonathan Smith";
// Extract only the first name ("Jonathan") using slice.

// Extract only the last 5 characters.

const firstName = fullName.slice(0 , 8)
// console.log(firstName);
const lastDigit = fullName.slice(8 , 14)
// console.log(lastDigit);


const csv = "apple,banana,orange,grape";
// Convert this CSV string into an array of fruits.

// Print each fruit on a new line using a loop.

const fruits = csv.split(" ,")
for (const f of fruits) {
    console.log(f);
  
}

const words = ["I", "love", "JavaScript"];
// Convert the array into "I love JavaScript".

// Convert the array into "I-love-JavaScript".

console.log(words.join("-"));
console.log(words.join(" "));


let msg = "Hello user, user logged in!";
// Replace "user" with "Robin" only the first occurrence.

// Replace all occurrences of "user" with "Robin".
console.log(msg.replace("user" , "robin"));


const email = "testuser@example.com";
// Check if "@" exists in the email.

// Find the index of "@" in the email.
console.log(email.includes("@"));

// 

const url = "moc.elpmaxe@resu";
const realEmail = url.split("").reverse().join("")
console.log(realEmail);


// Why companies rely on these?

// User input handling (Forms, logins, checkout flows).

// Data processing (APIs return data as strings that need formatting).

// Content personalization (Emails, push notifications).

// Search & SEO (Formatting URLs, checking keywords).


