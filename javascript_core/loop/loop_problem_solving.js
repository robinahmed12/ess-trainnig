const arr = [5, 10, 15, 20];
// Calculate total sum using a for loop
let sum = 0;
for (let i= 0; i < arr.length; i++) {
     sum = sum + arr[i] ;  
}

 console.log(sum);


 const numbers = [3, 7, 2, 9, 5];
// Find the largest number using a for loop
const largest = numbers[0]
for( let i = 1; i < numbers.length ; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i]
    }
}

console.log("Largest Number:", largest);