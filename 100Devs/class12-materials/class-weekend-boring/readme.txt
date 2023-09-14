document.querySelector('#check').addEventListener('click', check)


function check() {
  const day = document.querySelector('#day').value
  const output = document.querySelector('#placeToSee')
  //Conditionals go here
  // hw make this not case-sensitive

  if (day.toLowerCase() === "Tuesday".toLowerCase() || day.toLowerCase() === "Thursday".toLowerCase()) {
    output.innerHTML = "CLASS TIME!"
  } else if (day.toLowerCase() === "Saturday".toLowerCase() || day.toLowerCase() === "Sunday".toLowerCase()) {
    output.innerHTML = "WEEKEND!"
  } else if (day.includes('day')) {
    output.innerHTML = "BORING!"
  } else {
    output.innerHTML = "UMM WHAT?!"
  }

}
