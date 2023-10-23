//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['chinatown', 'italiantown', 'spacetown'];

tvShows.forEach(tv => console.log(tv));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [1, 2, 3, 4, 5]
console.log(numbers.filter(num => {
    if (num % 2 === 0) return num
}))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondHighestAndLowestSum(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr[arr.length-2])
    let sum = arr[1] + arr[arr.length-2];

    alert(sum);
}

secondHighestAndLowestSum([15, 2, 3, 9, 4])