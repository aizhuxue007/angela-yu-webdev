// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }

// add click listeners for both contestants that calls handle

document.querySelector('body').style.textAlign = 'center';

const contestants = document.querySelectorAll('.contestant');

// loop thru contestants to add click listeners
contestants.forEach(contestant => contestant.addEventListener('click', () => handle(contestant)))

// handle()
    // if contestant.classList.include('rose')
        // #claire toggle = 'hidden';
    // else
        // alert('wrong');

function handle(contestant) {
    contestant.classList.contains('rose') ? document.querySelector('#nikki').classList.toggle('hidden') : alert('wrong');
}