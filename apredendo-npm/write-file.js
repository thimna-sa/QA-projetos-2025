const fs = require('fs')


fs.writeFile('message.txt', "oi beh", (err) => {
    if (err) {
        throw err
    }  else {
    console.log('The file has been saved!')

    }


})