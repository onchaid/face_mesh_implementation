const matrixValidation = require('./matrixValidation.js');
const fs = require('fs');

function validateMatrix() {
    const identity = JSON.parse(fs.readFileSync('src/validation/matrix/identity.json', 'utf8'));
    const image = JSON.parse(fs.readFileSync('src/validation/matrix/image-2.json', 'utf8'));
    const matchLevel = matrixValidation(identity, image);
    return matchLevel;
}

console.log("Match level:", validateMatrix());