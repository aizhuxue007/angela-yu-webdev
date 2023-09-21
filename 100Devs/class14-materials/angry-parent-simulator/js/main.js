// document.getElementById('yell').addEventListener('click', screamInTextAndVoice)

// function screamInTextAndVoice() {
//   const fName = document.getElementById('firstName').value;
//   const fMiddle = document.getElementById('firstMiddle').value;
//   const lMiddle = document.getElementById('lastMiddle').value;
//   const lName = document.getElementById('lastName').value;
//   const saying = capitalizeFirstLetters(`${fName} ${fMiddle} ${lMiddle} ${lName}`);

//   screamInText(saying);
//   screamInVoice(saying);
// }

// function capitalizeFirstLetters(str) {
//   return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// }

// function screamInText(saying) {
//   document.getElementById('placeToYell').innerText = saying;
// }

// function screamInVoice(saying) {
//   const synth = window.speechSynthesis;
//   const utterance = new SpeechSynthesisUtterance(saying)

//   synth.speak(utterance);
// }

// Pseudocode
// 1. add click listener that calls handleSubmit when click
document.getElementById('yell').addEventListener('click', handleSubmit)
// 2. in handleSubmit()
      // 3. select all the inputs (fName, fMiddle, lMiddle, lName, output)
      // 4. fullName = capitalizeFullName()
      // 4. yellText()
            // output inner text = fullName
      // 4. yellUtterance()
            // create synth
            // utterance = synthisize utterance(fullName)
            // synth speak (utterance)
var output = document.getElementById('placeToYell');  

function handleSubmit() {
  const fName = document.getElementById('firstName').value;
  const fMiddle = document.getElementById('firstMiddle').value;
  const lMiddle = document.getElementById('lastMiddle').value;
  const lName = document.getElementById('lastName').value;
  const fullName = `${cap(fName)} ${cap(fMiddle)} ${cap(lMiddle)} ${cap(lName)}`;
  // console.log(`${fName} ${fMiddle} ${lMiddle} ${lName}`)
  yellText(fullName);
  yellVoice(fullName);
}

function cap(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


function yellText(word) {
  output.innerText = word + '!!!!!';
}

function yellVoice(word) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(word);
  synth.speak(utterance);
}