// //Write your pseduo code first! 

// // set up a clicklistener that calls outputF
// document.getElementById('toF').addEventListener('click', outputF)

// // in outputF
//     // set up a variable c which is the input value
//     // return the conversion math f = c * 9/5 + 32;
//     // innerText = conversion
// function outputF() {
//     const c = document.getElementById('celsius').value;
//     render(toF(c))
// }

// function render(txt) {
//     const output = document.getElementById('output')
//     output.innerText = txt
// }

// function toF(c) {
//     return c * 9/5 + 32;
// }

// click listener that calls handleSubmit
document.getElementById('toF').addEventListener('click', handleSubmit)

// handleSubmit()
    // get input value assign to c
    // convertToF(c)
    // render(c)
document.querySelector('body').style.textAlign = 'center';

function handleSubmit() {
    const celsius = document.getElementById('celsius').value;
    render( convertToF(celsius) + " °F")
}

function convertToF(c) {
    return c * (9/5) + 32;
}

function render(txt) {
    document.getElementById('output').innerText = txt;
}