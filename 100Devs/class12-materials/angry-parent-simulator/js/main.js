const firstName = document.getElementById('firstName')
const firstMiddle = document.getElementById('firstMiddle')
const lastMiddle = document.getElementById('lastMiddle')
const lastName = document.getElementById('lastName')
const yellBtn = document.querySelector('#yell')
const placeToYell = document.getElementById('placeToYell')


yellBtn.addEventListener('click', yell)

function yell() {
  renderName()
  speakName()
}

function speakName() {
  const robot = window.speechSynthesis
  const utterance = new SpeechSynthesisUtterance(formatName())
  robot.speak(utterance)
}

function renderName() {
  placeToYell.innerText = formatName()
}

function formatName() {
  return (
    `${capitalize(firstName.value || '')} ${capitalize(firstMiddle.value)} ${capitalize(lastMiddle.value || '')} ${capitalize(lastName.value || '')}!!!`
  )
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}