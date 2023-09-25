// *Variables*
// Create a variable and console log the value
let a;
console.log(a);
// Create a variable, add 10 to it, and alert the value
let b = 0;
b += 10;
console.log(b)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(a, b, c, d) {
    alert(a - b - c - d);
}

sub(1, 2,3, 4)
// Create a function that divides one number by another and returns the remainder
function findRemainder(a, b) {
    return a % b;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a, b) {
    if (a + b > 50) {
        alert('Jumanji');
    }
}

jumanji(50, 2);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(a, b, c) {
    let product = a * b * c;
    if (product % 3 === 0) alert('ZEBRA')
}
multiply(3, 3, 3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordTimes(word, n) {
    for (let i = 1; i <= n; i++) {
        console.log(word + '\n')
    }
    
}

wordTimes('hello', 5)