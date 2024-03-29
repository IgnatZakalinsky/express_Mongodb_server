const fs = require('fs');

exports.readJSONFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, buf) => {
            if (err) reject(err);
            else resolve(JSON.parse(buf.toString()));
        });
    });
};
exports.writeJSONFromFile = (filePath, data) =>{
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) reject(err);
            else resolve();
        })
    })
};
