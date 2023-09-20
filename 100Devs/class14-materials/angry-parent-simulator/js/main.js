document.getElementById('yell').addEventListener('click', screamInTextAndVoice)

function screamInTextAndVoice() {
  const fName = document.getElementById('firstName').value;
  const fMiddle = document.getElementById('firstMiddle').value;
  const lMiddle = document.getElementById('lastMiddle').value;
  const lName = document.getElementById('lastName').value;
  const saying = capitalizeFirstLetters(`${fName} ${fMiddle} ${lMiddle} ${lName}`);

  screamInText(saying);
  screamInVoice(saying);
}

function capitalizeFirstLetters(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

}

function screamInText(saying) {
  document.getElementById('placeToYell').innerText = saying;
}

function screamInVoice(saying) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(saying)

  synth.speak(utterance);
}