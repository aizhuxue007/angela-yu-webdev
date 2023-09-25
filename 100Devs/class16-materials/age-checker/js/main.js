const body = document.querySelector('body').style.textAlign = 'center'
//Create a conditonal that checks their age
const inputAge = document.getElementById('danceDanceRevolution');
const checkBtn = document.querySelector('h1')
let output = document.querySelector('p')

checkBtn.addEventListener('click', run)


function run() {
    let age = inputAge.value;
    console.log(age)
    if (age < 16) {
        render('can not drive')
    } else if (age < 18) {
        render("can't hate from outside the club, because they can't even get in")
    } else if (age < 21) {
        render('can not drink')
    } else if (age < 25) {
        render('can not rent cars affordably')
    } else if (age < 30) {
        render('can not rent fancy cars affordably')
    } else if (age >= 30) {
        render('there is nothing left to look forward too')
    }

}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
function render(txt) {
    output.innerText = txt;
}