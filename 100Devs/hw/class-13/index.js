//  https://javascript.info/function-expressions + Tasks 


// https://javascript.info/arrow-functions-basics + Tasks 

// my attempt
function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution")
// )

// solution
// same thang

// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md

/** CAROUSEL */
// function turnCarouselWhileLoop(n)
// while carosel is less than or equal to n turns
    // console carousel number
    // increment carousel

function turnCarouselWhileLoop() {
    let n = prompt('Enter number of carousel loops.')
    let carousel = 1;
    while (carousel <= n) {
        console.log(`Carousel turn number ${carousel}`)
        carousel++;
    }
}

//  function turnCarouselForLoop(n)
// for(i = 1; i <= n; i++)
    // console carousel number

function turnCarouselForLoop() {
    let n = prompt('Enter number of carousel loops.')
    for(let i = 1; i <= n; i++) console.log(`Carousel turn number ${carousel}`)
}

/** PARITY */
function checkParity() {
    let n = prompt('Enter number to check.')
    for (let i = 1; i <= n; i++) {
        if (i%2 === 0) console.log(`${i} is even.`)
        else console.log(`${i} is odd.`)
    }
}

/** Input Validation */
function inputValidation() {
    let i = 101;
    while (!(i > 50 && i < 100)) {
        n = prompt('Enter number to validate.')
        i = n;
    }
}

/** Multiplication table */
function showMultiplicationTable() {
    // prompt user for number
    // loop up to the number
        // show 0 * number = answer
    let n = prompt('Enter number between 2 and 9 for multiplication table')
    if (n >= 2 && n <= 9) {
        for (let i = 0; i <= n; i++) {
            console.log(`${i} x ${n} = ${i*n}`)
        }
    }
    else {
        alert('number out of bounds')
    }
}

// showMultiplicationTable()

/** Neither yes or no */
function yesOrNo() {
    // ask user for text
    // while text does not equal yes or no
        // keep asking
    // if response = yes or no
        // show game ends
    let userInput = prompt('enter text').toLowerCase()
    while (!((userInput === 'yes') || (userInput === 'no'))) userInput = prompt('enter again')
    if (userInput === 'yes' || userInput === 'no') alert('game ends')
}

// yesOrNo()

/** FizzBuzz */
function fizzBuzz() {
    // loop to show numbers from 1 to 100
        // except in numbers divisible by 3 show 'fizz" and not 5
        // show 'buzz' if number is divisble by 5 but not 3
        // show 'fizzbuzz' for numbers divisible by both 3 and 5
    for (let i = 1; i <= 100; i++) {
        if (i%3 === 0 && !(i%5 === 0)) {
            console.log('Fizz')
        } else if (i%5 === 0 && !(i%3 === 0)) {
            console.log('Buzz')
        } else if (i%5 === 0 && i%3 === 0) {
            console.log('FizzBuzz')
        } else {
            console.log(i)
        }

    }
}

fizzBuzz()