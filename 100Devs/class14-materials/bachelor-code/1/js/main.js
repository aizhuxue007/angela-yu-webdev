// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }

document.querySelector('body').style.textAlign = 'center';

const claire = document.getElementById('claire')
const nikki = document.getElementById('nikki')
const sharleen = document.getElementById('sharleen')

// resize images to 600px by 600px
claire.classList.add('pic')
nikki.classList.add('pic')
sharleen.classList.add('pic')

document.getElementById('finalRose').addEventListener('click', run)

function run() {
	document.getElementById('claire').style.display = 'none';
	document.getElementById('sharleen').style.display = 'none';
}
