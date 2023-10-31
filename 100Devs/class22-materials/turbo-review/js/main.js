// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'water';
console.log(favDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let strOfWords = 'hot dog apple person';
console.log(strOfWords.includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let index = Math.random();
    if (index <= 0.33) {
        return 'rock';
    } else if (index <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(rockPaperScissors());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function play(choice) {
    let cpuChoice = rockPaperScissors();
    switch (choice) {
        case 'rock':
            if (cpuChoice == 'rock') {
                console.log(choice, cpuChoice, 'draw')
                break;

            } else if (cpuChoice == 'paper') {
                console.log(choice, cpuChoice, 'lose')
                break;
                
            } else {
                console.log(choice, cpuChoice, 'win')
                break;

            }
        case 'paper':
            if (cpuChoice == 'rock') {
                console.log(choice, cpuChoice, 'win')
                break;

            } else if (cpuChoice == 'paper') {
                console.log(choice, cpuChoice, 'draw')
                break;
                
            } else {
                console.log(choice, cpuChoice, 'lose')
                break;

            }
        case 'scissors':
            if (cpuChoice == 'rock') {
                console.log(choice, cpuChoice, 'lose')
                break;

            } else if (cpuChoice == 'paper') {
                console.log(choice, cpuChoice, 'win')
                break;
                
            } else {
                console.log(choice, cpuChoice, 'draw')
                break;

            }
        default:
            console.log('invalid input')
            break;
    }   
}

play('scissors');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(choices) {
    choices.forEach(choice => play(choice));
}

playGame(['rock', 'paper', 'scissors'])