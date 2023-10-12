//Create an array of movie titles. Loop through the array and each element to the h2.
const h2 = document.querySelector('h2');
let movies = ['batman', 'scooby-doo', 'matrix'];

movies.forEach(movie => h2.innerText += `\n${movie}`);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrayNums = [1, 2, 3]

for (let i = 0; i < arrayNums.length; i++) {
    arrayNums[i] += 3;
}

console.log(arrayNums);

//Find the average of all the numbers from question three
let avg = 0
let counter = 0

for (let i = 0; i < arrayNums.length; i++) {
    counter += arrayNums[i]
}

avg = counter / arrayNums.length;

console.log(avg)