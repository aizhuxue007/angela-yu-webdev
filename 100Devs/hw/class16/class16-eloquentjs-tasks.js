// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let str = ''

for (let i = 1; i <= 7; i++) {
    while (str.length < i) {
        str += '#'
    }
    console.log(str)
    str = ''
}

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) console.log('FizzBuzz'); 
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i)
}


// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

let col_str = ''

for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
        if ((row + col) % 2 === 0) col_str += ' ';
        else col_str += '#';
    }
    col_str += '\n';
}

console.log(col_str);

// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// // Your code here.
min = (a, b) => Math.min(a, b);
// console.log(min(0, 10));
// // → 0
console.log(min(0, 10))
// console.log(min(0, -10));
// // → -10
console.log(min(0, -10))

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
isEven = (n) => {
    if (n === 0) return true;
    if (n === 1) return false;
    if (n < 0) return n % 2 === 0;
    return isEven(n - 2);
}

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
// maximum call stack is exceeded because the negative number never equals to 0 or 1. I just added another if statement that checks if % 2 === 0


// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(str) {
    return countChar(str, 'B');
}
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// // Your code here.
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count 
}

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
