//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.getElementById('help').addEventListener('click', run)

function run() {
    let inputVal = document.querySelector('input').value;
    let snackTimes = parseInt(inputVal)
    let txt = ''
    let stops = document.getElementById('stops')
    for (let i = 1; i <= snackTimes; i++ ) {
        txt += '\nSTOP!'
    }
    stops.innerText = txt;
}