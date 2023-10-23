// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'CHRISTMAS'.toUpperCase();
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'last threee letters';
alert( str.slice(-3) );

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absolute(n1, n2, n3, n4, n5) {
    alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5));
}

absolute(10, 10, 10, 10, 10);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highAndLow(n1, n2, n3) {
    console.log(Math.min(n1, n2, n3),Math.max(n1, n2, n3))
}

highAndLow(1, 2, 3);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
    return Math.random() > 0.50 ? 'heads' : 'tails';
}

console.log(headsOrTails());
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headOrTailsTimes(n) {
    for (let i = 0; i < n; i++) {
        console.log(i, headsOrTails())
    }
}

headOrTailsTimes(5);