let total = 0

const firstLi = document.getElementById('pumpkin').addEventListener('click', calculateFirstLiAndDisplay)
const secondLi = document.getElementById('dominosPizza').addEventListener('click', calculateSecondLiAndDisplay)
const thirdLi = document.getElementById('zebra').addEventListener('click', calculateThirdLiAndDisplay)
const fourthLi = document.getElementById('chingchongwingwong').addEventListener('click', calculateFourthLiAndDisplay)
const fifthLi = document.getElementById('cantThinkOfAnything').addEventListener('click', calculateFifthLiAndDisplay)
const resultSpan = document.getElementById('placeToPutResult')

function displayTotal() {
  resultSpan.innerText = total;
}

function calculateFirstLiAndDisplay() {
  total = 0
  displayTotal()
}

function calculateSecondLiAndDisplay() {
  total += 3
  displayTotal()
}

function calculateThirdLiAndDisplay() {
  total += 9
  displayTotal()
}

function calculateFourthLiAndDisplay() {
  total -= 5
  displayTotal()
}

function calculateFifthLiAndDisplay() {
  total -=2
  displayTotal()
}

