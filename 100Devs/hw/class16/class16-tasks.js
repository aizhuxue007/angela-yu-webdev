// JS Way - tasks

/** 3, 2, 1... Code */
// Write a program that displays your name and age.
console.log('Aizhu');
console.log(27);

// Math Operations on 6 by 3
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);

// console.log predictions
console.log(4 + 5); // expect 9
console.log("4 + 5"); // expect "4 + 5"
console.log("4" + "5"); // expect "45"

/** Play with variables */

// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

let firstName = prompt('Enter first name');
let lName = prompt('Enter last name');
alert(`${firstName} ${lastName}`)

// Final values
// Observe the following program and try to predict the final values of its variables.

/**
 * My expectations
 * a = 2
 * b = 10
 * c = 102
 * d = 30
 * e = 40
 * f = 10
 * g = 10/4 -> wrong -> answer is 10
 */

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let rawPrice = prompt('What is the raw price?')
const vatRate = 0.206
let finalPrice = Number(rawPrice) * vatRate
console.log(finalPrice)


// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
let celsius = prompt('Enter celsius to convert to Fahrenheit')
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit + ' degrees F')

// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

number1 -= 2;
number2 += 2;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

/** Add conditions */

// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
let userDay = prompt('Enter day').toLowerCase();
if (userDay === 'monday') {
    console.log('tuesday')
} else if (userDay === 'tuesday') {
    console.log('wednesday')
} else if (userDay === 'wednesday') {
    console.log('thursday')
} else if (userDay === 'thursday') {
    console.log('friday') 
} else if (userDay === 'friday') {
    console.log('saturday')
} else if (userDay === 'saturday') {
    console.log('sunday') 
} else if (userDay === 'sunday') {
    console.log('monday') 
} else {
    console.log('please enter a valid date')
}

switch (userDay) {
    case 'monday':
        console.log('tuesday');
        break;
    case 'tuesday':
        console.log('wednesday');
        break;
    case 'wednesday':
        console.log('thursday');
        break;
    case 'thursday':
        console.log('wednesday');
        break;
    case 'friday':
        console.log('saturday');
        break;
    case 'saturday':
        console.log('sunday');
        break;
    case 'sunday':
        console.log('monday');
        break;
    default:
        console.log('please enter correct day')
}

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let n1 = prompt('enter first number');
let n2 = prompt('enter second number');

if (n1 > n2) {
    console.log(`${n1} is greater than ${n2}`)
} else if (n1 < n2) {
    console.log(`${n1} is less than ${n2}`)
} else {
    console.log(`${n1} is equal ${n2}`)
}

// Final values
// Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

// Initial values	nb1 final value	nb2 final value	nb3 final value
// nb1=nb2=nb3=4 -> expect nb1 = 0, nb2 = 4, nb3 = 10	-> wrong
// nb1=4,nb2=3,nb3=2 -> expect nb1 = 6, nb2 = 3, nb3 = 2  -> wrong
// nb1=2,nb2=4,nb3=0 -> expect nb1 = 3, nb2 = 4, nb3 = 0			
// Check your predictions by executing the program.

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
let monthInput = Number(prompt('Enter month between 1 and 12'));
if (monthInput === 1) {
    console.log(`month ${monthInput} -> 31 days`)
} else if (monthInput === 2) {
    console.log(`month ${monthInput} -> 28 days`)
} else if (monthInput === 3) {
    console.log(`month ${monthInput} -> 31 days`)
} else if (monthInput === 4) {
    console.log(`month ${monthInput} -> 30 days`)
} else if (monthInput === 5) {
    console.log(`month ${monthInput} -> 31 days`)
} else if (monthInput === 6) {
    console.log(`month ${monthInput} -> 30 days`)
} else if (monthInput === 7) {
    console.log(`month ${monthInput} -> 31 days`)
} else if (monthInput === 8) {
    console.log(`month ${monthInput} -> 31 days`)
} else if (monthInput === 9) {
    console.log(`month ${monthInput} -> 30 days`)
} else if (monthInput === 10) {
    console.log(`month ${monthInput} -> 31 days`)
} else if (monthInput === 11) {
    console.log(`month ${monthInput} -> 30 days`)
} else if (monthInput === 12) {
    console.log(`month ${monthInput} -> 31 days`)
} else {
    console.log('please enter valid month')
}

switch (monthInput) {
    case 1:
        console.log(`month ${monthInput} -> 31 days`)
        break;
    case 2: 
        console.log(`month ${monthInput} -> 28 days`)
        break;
    case 3: 
        console.log(`month ${monthInput} -> 31 days`)
        break;
    case 4: 
        console.log(`month ${monthInput} -> 30 days`)
        break;
    case 5: 
        console.log(`month ${monthInput} -> 31 days`)
        break;
    case 6: 
        console.log(`month ${monthInput} -> 30 days`)
        break;
    case 7:
        console.log(`month ${monthInput} -> 31 days`)
        break;
    case 8: 
        console.log(`month ${monthInput} -> 31 days`)
        break;
    case 9: 
        console.log(`month ${monthInput} -> 30 days`)
        break;
    case 10: 
        console.log(`month ${monthInput} -> 31 days`)
        break;
    case 11: 
        console.log(`month ${monthInput} -> 30 days`)
        break;
    case 12: 
        console.log(`month ${monthInput} -> 31 days`)
        break;
    default:
        console.log('please enter valid month')
    
}

// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
let userHours = Number(prompt('Please enter hours.'))
let userMinutes = Number(prompt('Please enter minutes.'))
let userSeconds = Number(prompt('Please enter seconds.'))
userSeconds += 1;
// This is not as simple as it seems... Look at the following results to see for yourself:
if (userSeconds % 60 === 0) {
    userMinutes += 1;
    userSeconds = 0;
}
if (userMinutes % 60 === 0) {
    userHours += 1;
    userMinutes = 0;
}

console.log(`${userHours}h${userMinutes}m${userSeconds}s`)

// 14h17m59s should give 14h18m0s
// 6h59m59s should give 7h0m0s
// 23h59m59s should give 0h0m0s (midnight)

/** Repeat Statements */

// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

let input = 1;
while(input > 0) {
    input = prompt('Enter a number')
}
console.log('you are done')

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

while (!((input > 50) && (input < 100))) {
    input = prompt('Enter a number again between 50 and 100')
}

// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.
let multipleInput = Number(prompt('enter num for multiplication'))

for (let i = 0; i <= multipleInput; i++) {
    console.log(`${i} x ${multipleInput} = ${i * multipleInput}`)
}
// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
multipleInput = Number(prompt('enter num again for multiplication between 2 and 9'))
if ((multipleInput > 2) && (multipleInput < 9)) {
    for (let i = 0; i <= multipleInput; i++) {
        console.log(`${i} x ${multipleInput} = ${i * multipleInput}`)
    } 
} else {
    console.log('out of bounds')
}

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let gameInput = prompt('type in a string');

while (!((gameInput === 'yes') || (gameInput === 'no'))) {
    gameInput = prompt('try again');
}

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
for (let i = 1; i <= 100; i++) {
    if ((i%3 === 0) && (i%5 === 0)) {
        console.log('FizzBuzz');
    } else if (i%3 === 0) {
        console.log('Fizz');
    } else if (i%5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i)
    }
}

// THE JS WAY

// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}
  
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result
let fName = prompt('Enter First Name')
let laName = prompt('Enter Last Name')
sayHello(fName, laName)

// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
    // TODO: complete the function code
    return x ** 2;
}
  
// Square the given number x
const square2 = x => x ** 2 // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//   When it's done, update the program so that it shows the square of every number between 0 and 10.

for (let i = 0; i <= 10; i++) {
    console.log(square2(i))
}

//   Minimum of two numbers
//   Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function
function min(n1, n2) {
    return (n1 < n2) ? n1 : n2;
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

//   Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
function calculate(n1, operator, n2) {
    switch (operator) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            console.log('please enter valid input');
            return null;
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.


function calcCircumferenceAndArea(r) {
    console.log(calcCircumference(r))
    console.log(calcCircleArea(r))
}

function calcCircumference(r) {
    return 2 * Math.PI * r
}

function calcCircleArea(r) {
    return Math.PI * r ** 2
}

calcCircumferenceAndArea(55)

console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3