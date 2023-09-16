//Write your pseduo code first! 
// 1. get the values 
// 2. convert the c to f using math formula, store in variable result
// 3. return the result

const cInput = document.getElementById('celcius')
const fBtn = document.getElementById('f').addEventListener('click', convertToF)

function convertToF() {
    let c = cInput.value;
    const output = document.getElementById('output')
    output.innerText = parseInt(c) * 9/5 + 32;
}