//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function savage21() {
    const output = document.getElementById('savageSays')
    let txt = ''
    for (let i = 1; i <= 21; i++) {
        console.log('21');
        txt += '21\n'
    }
    output.innerHTML = `<p>${txt}</p>`
}

savage21()