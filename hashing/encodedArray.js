const isLetter = require('./isLetter');

function encodedArray(string) {
    // Remove whitespce
    let stringCopy = string.replace(/\s/g, '');

    let arrayOfNumbers = stringCopy.split('').reduce((done, char) => {
        if (isLetter(char)) return done.concat(char.charCodeAt(0).toString().split('').map(Number));
        return done.concat(parseInt(char));
    }, []);

    return arrayOfNumbers;
}

module.exports = encodedArray;