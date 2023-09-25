//--- Easy
//create a variable and assign it a number
let num = 20;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(`num = ${num}`)

//--- Medium
//create a variable that holds a value from the input
let input = document.getElementById('danceDanceRevolution')
let inputVal = input.value ? input.value : 0;

//add 25 to that number
inputVal += 25;

//alert that number
alert(inputVal)

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1') // on page load


//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sumPrevVariables)

function sumPrevVariables() {
    inputVal = document.getElementById('danceDanceRevolution').value
    console.log(`num: ${num} || inputVal: ${Number(inputVal)} ${num + Number(inputVal)}`);
}