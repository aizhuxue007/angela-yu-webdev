//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, 5]
alert(nums.reduce((acc, curr) => acc + curr), 0);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(numbers) {
    return numbers.map(x => x ** 2);
}

console.log(squared([1, 2, 3, 4, 5]))
//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
    return str.split('').reverse().join();
}

console.log(reverse('dlog'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
    str == reverse(str) ? alert('yes') : alert('no');
}
console.log(palindrome('dod'))