function square(num) {
    const sqr = num * num
    console.log(sqr);
    
}

square(6)

function largestNumber (a , b, c) {
    if (a >= b && a>= c) {
        return a
    } else if ( b >= a && b>=c) {
        return b;
    } else {
        return c
    }
    
}

console.log(largestNumber(3 , 5, 6));

// Check if a number is even or odd

function isEven (number){
    if (number % 2 === 0){
        return  "even"
    } else {
        return "odd"
    }
}

// ternary

function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(10));

// Discount Calculator (price, discount % → final price)

function CalculationDiscount (price , discountPercent){
    let discountAmount = price * (discountPercent / 100)
    let finalPrice = price - discountAmount
    return finalPrice
}

console.log("final price", CalculationDiscount(500, 20));

// Grade Calculator (marks → grade A/B/C)
function gradeCalculator (marks){
    if (marks >= 80) {
        return "A"
    } else if ( marks <= 60) {
        return "B"
    } else  {
        return "c"
    }
}

console.log(gradeCalculator(90));

// Bank Interest Calculator (principal, rate, time → interest)

function calculatorInterest (principle , rate , time) {
    return (principle * rate * time) / 100;
}

console.log(calculatorInterest(1000 , 50 , 30));






