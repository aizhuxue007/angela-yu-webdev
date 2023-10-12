// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bool = false;
alert(bool);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'red';
favColor = 'blue';
console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function doMath(n1, n2, n3, n4) {
    return (n1 + n2 + n3) / n4;
}

console.log(doMath(1, 2, 6, 3)); // expect 3

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function findPower(n1, n2) {
    console.log(n1 ** n2);
}

findPower(2, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function alertIf(bool, str) {
    return bool ? alert(str) : console.log(str)
}
alertIf(true, 'hello world');
alertIf(false, 'should of consolelogged');


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++ ) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(100);