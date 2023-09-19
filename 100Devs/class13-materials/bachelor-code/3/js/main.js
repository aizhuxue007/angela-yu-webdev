// select contestant classes, claire andnikki
const contestants = document.querySelectorAll('.contestant')
const claire = document.getElementById('claire')
const nikki = document.getElementById('nikki')

// add click listener for contestants
contestants.forEach(contestant => contestant.addEventListener('click', () => {
	clicked(contestant)
}))

// clicked()
function clicked(contestant) {
	// if contestant has class of rose
	if (contestant.classList.contains('rose')) {
		// show nikki pic
		nikki.classList.toggle('hidden')
	} else {
		alert('wrong!')
	}
	// else
		// alert wrong!
}