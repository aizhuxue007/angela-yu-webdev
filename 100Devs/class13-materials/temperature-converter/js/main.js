// select celcius input, fahrenheit button, output
const celsiusInput = document.getElementById('celcius')
const toFahrenheitBtn = document.getElementById('f')
const output = document.getElementById('output')

// add click listener to fahrenheit button that calls handleClick
toFahrenheitBtn.addEventListener('click', handleClick)

// handleClick()
function handleClick() {
    // store convertToF(c) to f
    let f = convertToF(celsiusInput.value)
    // render(f)
    render(f)
}

function convertToF(c) {
// convertToF(c)
    return c * 9/5 + 32;

}

// render(text)
function render(txt) {
    // output text set to text
    output.innerText = txt
}

function log(item) {
    console.log(item)
}