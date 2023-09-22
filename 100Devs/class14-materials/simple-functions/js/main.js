// //create a function that adds two numbers and alerts the sum
// function add(a, b) {
//     alert(a + b);
// }
// //create a function that multiplys three numbers and console logs the product
// function multiply(a, b, c) {
//     console.log(a * b * c);
// }
// //create a function that divides two numbers and returns the ???
// function divide(a, b) {
//     return a / b;
// }

// add(1, 5) // expect 6
// multiply(1, 2, 3) // expect 6
// console.log(divide(1, 2)) // 0.5

function add(a, b) {
    alert(a + b)
}

function multiply(nums) {
    const args = Array.prototype.slice.call(arguments);
    return args.reduce((acc, curr) => acc * curr);
}

function divide(a, b) {
    return a / b;
}

add(1, 2) // expect 3
console.log(multiply(1, 2, 3)) // expect 6
console.log(divide(4, 2)) // expect 2