const fs = require("fs")

// fs.writeFile(
//     "message.txt", 
//     "Hello from nodejs", 
//     (err) => {
//         if (err) throw err;
//         console.log("File has been successfully saved!")
//     }
// )

// Challenge
fs.readFile(
    'message.txt',
    'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);



