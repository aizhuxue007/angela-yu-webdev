// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	sharleen.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	andi.classList.add('hidden')
// 	claire.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }

document.querySelector('body').style.textAlign = 'center';

document.getElementById('andiNext').addEventListener('click', andiNext)
document.getElementById('claireNext').addEventListener('click', claireNext)
document.getElementById('sharleenNext').addEventListener('click', sharleenNext)

function andiNext() {
	document.getElementById('claire').classList.add('hidden');
	document.getElementById('sharleen').classList.add('hidden');
	document.getElementById('andi').classList.toggle('hidden');
}

function claireNext() {
	document.getElementById('andi').classList.add('hidden');
	document.getElementById('sharleen').classList.add('hidden');
	document.getElementById('claire').classList.toggle('hidden');
}

function sharleenNext() {
	document.getElementById('andi').classList.add('hidden');
	document.getElementById('claire').classList.add('hidden');
	document.getElementById('sharleen').classList.toggle('hidden');
}

