//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(a, b) {
    alert(a - b);
}
//create a function that divides three numbers and console logs the quotient
function divide(a, b ,c) {
    log(a / b / c);
}
//create a function that multiplys three numbers and returns the product
function multiply(a, b, c) {
    return a * b * c;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(a, b, c) {
    return (a + b) % c;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function crazy(a, b, c, d) {
    let firstTwo = a * b;
    if (firstTwo > 100) {
        console.log(c + d)
    } else if(firstTwo < 100) {
        log(c - d)
    } else if(firstTwo === 100) {
        alert((a * b * c) % d);
    } else {
        log('blah')
    }
}

function log(txt) {
    console.log(txt);
}

sub(1, 2) // expect
divide(1, 2, 3) // expect
log(multiply(1, 2, 3)) // expect
log(medium(3, 3, 2)) // expect
crazy(1, 2, 3, 4) //expect