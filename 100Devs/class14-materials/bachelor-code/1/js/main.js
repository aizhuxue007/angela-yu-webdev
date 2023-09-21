// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }

console.log('in here');

document.getElementById('finalRose').addEventListener('click', run)

function run() {
	console.log('clicked')
	document.getElementById('claire').style.display = 'none';
	document.getElementById('sharleen').style.display = 'none';
}
