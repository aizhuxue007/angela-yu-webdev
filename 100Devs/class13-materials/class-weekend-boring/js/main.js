//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// select day input, check btn, and #placeToSee
const dayInput = document.getElementById('day')
const checkBtn = document.getElementById('check')
const output = document.getElementById('placeToSee')

// add click listener to checkBtn that runs check()
checkBtn.addEventListener('click', check)

// check()
function check() {
  // let day be the value of lowercase dayInput
  let day = dayInput.value.toLowerCase()
  // if day is tuesday or day is thursday
  if (day === 'tuesday' || day === 'thursday') { 
    // output shows "Class Time"
    render('Class Time!')
  } else if (day === 'wednesday') {
    render('HUMPDay!')
  } else if (day.includes('day')) {
    render('BOOORRRRIIINNNNGG')
  } else {
    render('HUUHHH?? UHM WHAT?!')
  }
  // else if day is wednesday
    // output shows "Humpday!"
  // else if day contains "day"
    // output "BOOOORRRRIIINNNG!"
  // else
    // output "HUUHHH?? UHM WHAT?!"
}

function render(text) {
  output.innerText = text
}

function log(obj) {
  console.log(obj)
}