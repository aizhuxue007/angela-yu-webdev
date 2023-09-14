const dayInput = document.getElementById('day')
const checkBtn = document.getElementById('check').addEventListener('click', run)
const outputH2 = document.getElementById('placeToSee')

function run() {
  let day = dayInput.value.toLowerCase()

  if (day === 'Tuesday'.toLowerCase() || day === 'Thursday') {
    outputH2.innerText = "CLASS TIME!!!"
  } else if (day.includes('day')) {
    outputH2.innerText = "BORRRINNNNG!!!"
  } else {
    outputH2.innerText = "UHMMM WHAT??!"
  }
}