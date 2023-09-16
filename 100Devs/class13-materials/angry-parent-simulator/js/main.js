// select firstName, firstMiddle, lastMiddle, lastName and yellBtn and save into their respective variables
const firstName = document.getElementById('firstName')
const firstMiddle = document.getElementById('firstMiddle')
const lastMiddle = document.getElementById('lastMiddle')
const lastName = document.getElementById('lastName')
const yellBtn = document.getElementById('yell')
const outputH2 = document.getElementById('placeToYell')

// select yellBtn and add eventlistener when clicked, when clicked call run function
yellBtn.addEventListener('click', run)

// getFirstName()
function getCapitalizedFirstName() {
  return capitalize(firstName.value)
}

// getCapitalizedFirstMiddle()
function getCapitalizedFirstMiddle() {
  return capitalize(firstMiddle.value)
}

// getCapitalizedLastMiddle()
function getCapitalizedLastMiddle() {
  return capitalize(lastMiddle.value)
}

// getCapitalizedLastName()
function getCapitalizedLastName() {
  return capitalize(lastName.value)
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function renderFullName() {
  outputH2.innerText = formatFullName();
}

function yellFullName() {
  const synth = window.speechSynthesis;
  const utterance = new window.SpeechSynthesisUtterance(formatFullName())
  synth.speak(utterance)
}

// run function
function run() {
  renderFullName()
  yellFullName()
}

// select #placeToYell
// concatenate full name and store into variable fullName
// update #placeToYell with innerTEXT of fullName

// formatFullName()
  // each name has uppercase first letter -> another function
function formatFullName() {
  return `${getCapitalizedFirstName()} ${getCapitalizedFirstMiddle()} ${getCapitalizedLastMiddle()} ${getCapitalizedLastName()}`
}

