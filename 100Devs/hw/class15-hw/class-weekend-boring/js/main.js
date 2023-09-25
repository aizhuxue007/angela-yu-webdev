// //Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// const day = document.getElementById('day');
// const checkBtn = document.getElementById('check');
// const placeToSee = document.getElementById('placeToSee');

// checkBtn.addEventListener('click', checkDay)

// function output(txt) {
//   placeToSee.innerText = txt;
// }

// function checkDay() {
//   let dayInput = day.value.toLowerCase();
//   if (dayInput === 'tuesday' || dayInput === 'thursday') {
//     output('CLASS Time!!');
//   } else if (dayInput === 'saturday' || dayInput === 'sunday') {
//     output('IT\'s the weekend!');
//   } else if (dayInput.includes('day')) { 
//     output('BOORRRINNG!'); 
//   } else { output('HUUHH WHHHAT??'); }
// }

document.querySelector('body').style.textAlign = 'center';

document.getElementById('check').addEventListener('click', checkDay);

// add click listener that runs checkDay()
    // select dayInput, output
    // if dayInput === 'tuesday' or equals 'thursday'
        // output.innerTEXT = 'CLASS TIME'
    // else if dayInput.include('day')
        // output 'BORING'
    // else 
        // output 'HUHHHH Whatt?'

function checkDay() {
    const dayInput = document.getElementById('day').value.toLowerCase()
    if (dayInput === 'tuesday' || dayInput === 'thursday') {
        render('CLASS TIME');
    } else if (dayInput.includes('day')) {
        render('BORING!');
    } else {
        render('HUUHHH WHATT?!');
    }
}

function render(txt) {
    const output = document.getElementById('placeToSee')
    output.innerText = txt;
}