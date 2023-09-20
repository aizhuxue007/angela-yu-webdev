//Write your pseduo code first! 

// set up a clicklistener that calls outputF
document.getElementById('toF').addEventListener('click', outputF)

// in outputF
    // set up a variable c which is the input value
    // return the conversion math f = c * 9/5 + 32;
    // innerText = conversion
function outputF() {
    const c = document.getElementById('celsius').value;
    render(toF(c))
}

function render(txt) {
    const output = document.getElementById('output')
    output.innerText = txt
}

function toF(c) {
    return c * 9/5 + 32;
}
