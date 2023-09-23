// // *Variables*
// // Create a variable and console log the value
// let a = 2;
// console.log(2);

// // Create a variable, add 10 to it, and alert the value
// let b = 0; 
// console.log(b + 10);

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
// function subtract(a, b, c, d) {
//     alert(a - b - c - d);
// }

// // Create a function that divides one number by another and returns the remainder
// function findModulus(a, b) {
//     return a % b;
// }

// // *Conditionals*
// // Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function alertJumanji(a, b) {
//     if (a + b > 50) {
//         alert('Jumanji')
//     }
// }

// // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// function multiply(a, b, c) {
//     let product = a * b * c;
//     if (product % 3 === 0) {
//         alert('Zebra')
//     }
// }

// subtract(1, 2, 3, 4) // expect -8
// console.log(findModulus(1, 2)) // expect 1
// alertJumanji(5, 50) // expect 'Jumanji!'
// alertJumanji(4, 5) // expect null or undefined
// multiply(3, 3, 3) // expect 'ZEBRA'
// multiply(1, 4, 4) // expect null or undefined

// // *Variables*
// // Create a variable and console log the value
const a = 12;
console.log(a); // expect 12

// // Create a variable, add 10 to it, and alert the value
let b = 10;
b += 10;
alert(b); // expect 20

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
function subtract(numbers) {
    const args = Array.prototype.slice.call(arguments)
    let sum = args.slice(1).reduce((acc, curr) => acc + curr)
    console.log(`${sum}`)
    return args[0] - sum;
}

alert(subtract(1, 2, 3, 4)); // expect -8

// // Create a function that divides one number by another and returns the remainder
function findModulus(n1, n2) {
    return n1 % n2;
}

console.log(findModulus(1, 2)) // expect 1


// // *Conditionals*
// // Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji');
    }
}

jumanji(50, 10) // expect Jumanji


// // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(numbers) {
    const args = Array.prototype.slice.call(arguments)
    let product = args.reduce((acc, current) => {
        return acc * current;
    }, 0);
    if (product % 3 === 0) {
        alert('ZEBRA')
    }
}

multiply(3, 3, 3) // expect ZEBRA

