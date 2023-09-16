// select finalRoseH2, claire, nikki, sharleen
const finalRoseH2 = document.getElementById('finalRose')
const claire = document.getElementById('claire')
const nikki = document.getElementById('nikki')
const sharleen = document.getElementById('sharleen')

// add clicknlistener for finalRoseH2, when click run function
finalRoseH2.addEventListener('click', run)

// run function
function run() {
	// hide claire
	claire.style.display = 'none'
	// hide sharleen
	sharleen.style.display = 'none'
}