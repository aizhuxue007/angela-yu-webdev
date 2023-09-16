// select andi, andiNext, claire, claireNext, sharleen and sharleenNext
const andi = document.getElementById('andi')
const andiNextHeading = document.getElementById('andiNext')
const claire = document.getElementById('claire')
const claireNextHeading = document.getElementById('claireNext')
const sharleen = document.getElementById('sharleen')
const sharleenNextHeading = document.getElementById('sharleenNext')

// for all the Next, add click listener that calls corresponding nameNext functions
andiNextHeading.addEventListener('click', andiNext)
claireNextHeading.addEventListener('click', claireNext)
sharleenNextHeading.addEventListener('click', sharleenNext)

// andiNext()
function andiNext() {
	// hide claireNext
	claireNextHeading.classList.add('hidden')
	// hide sharleenNext
	sharleenNextHeading.classList.add('hidden')
	// toggle andi
	andi.classList.toggle('hidden')
}

function claireNext() {
// claireNext()
	// hide andiNext
	andiNextHeading.classList.add('hidden')
	// hide sharleenNext
	sharleenNextHeading.classList.add('hidden')
	// toggle claire
	claire.classList.toggle('hidden')
}

function sharleenNext() {
// sharleenNext()
	// hide andiNext
	andiNextHeading.classList.add('hidden')
	// hide claireNext
	claireNextHeading.classList.add('hidden')
	// toggle sharleen
	sharleen.classList.toggle('hidden')
}