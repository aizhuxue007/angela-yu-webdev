// *Variables*
// Create a variable and console log the value
let a;
console.log(a)

// Create a variable, add 10 to it, and alert the value
let b = 10
alert(b)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumbers(a, b, c, d, e) {
    let difference = a - b - c - d - e
    alert(difference)
}

// Create a function that divides one number by another and returns the remainder
function findRemainder(a, b) {
    return a%b;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function isJumanji(a, b) {
    (a + b) > 50 ? alert('Jumanji') : null
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function isZebra(a, b, c) {
    (a * b * c) % 3 === 0 ? alert('Zebra') : null
}