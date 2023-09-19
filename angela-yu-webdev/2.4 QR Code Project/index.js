/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { image } from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Enter your URL to convert to QR Code: '
        }
    ])
    .then((answers) => {
        const { url } = answers
        convertToQR(url)
        saveInputTo('input.txt', url)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('error with environment')
        } else {
            console.error(`Error shown: ${error}`)
        }
    })

    function convertToQR(url) {
        console.log(url)
        const qrSvg = image(url)
        qrSvg.pipe(fs.createWriteStream('qr.png'))
    }

    function saveInputTo(fileName, data) {
        fs.writeFile(fileName, data, (error) => { if (error) throw error })
    }