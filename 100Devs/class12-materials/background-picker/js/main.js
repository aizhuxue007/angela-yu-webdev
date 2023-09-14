const body = document.querySelector('body')
const purpleLi = document.getElementById('purple').addEventListener('click', setPurpleBackground)
const greenLi = document.getElementById('green').addEventListener('click', setGreenBackground)
const blueLi = document.getElementById('blue').addEventListener('click', setBlueBackground)
const yellowLi = document.getElementById('yellow').addEventListener('click', setYellowBackground)

// purple - rgba(241,63,247,1)
function setPurpleBackground() {
  setBackground('rgba(241,63,247,1)')
  setTextWhite()
}

// green - rgba(0,253,81,1)
function setGreenBackground() {
  setBackground('rgba(0,253,81,1)')
  setTextWhite()
}

// blue - rgba(0,254,255,1)
function setBlueBackground() {
  setBackground('rgba(0,254,255,1)')
  setTextWhite()
}

// yellow - rgba(216,253,2,1)
function setYellowBackground() {
  setBackground('rgba(216,253,2,1)')
  body.style.color = "#000000"
}

function setBackground(color) {
  body.style.backgroundColor = color
}

function setTextWhite() {
  body.style.color = '#FFFFFF'
}