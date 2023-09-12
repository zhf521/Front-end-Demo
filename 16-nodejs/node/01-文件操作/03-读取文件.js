let fs = require('fs');
fs.readFile('./file/name.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
