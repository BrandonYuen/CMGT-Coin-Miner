const isLetter = require('./isLetter');

// Alternatief met recursion hieronder. Uiteindelijk niet gebruikt omdat dit minder efficient is.

function encodedArrayRecursion(string, array=[]) {

    // Remove whitespace
    let stringCopy = string.replace(/\s/g, '');

    // The new array
    let newArray = array.slice();

    // Keep recursing untill the input string is empty
    if (stringCopy.length) {

        // If letter, encode with ASCII and concat
        if (isLetter(stringCopy.charAt(0))) newArray = newArray.concat(stringCopy.charCodeAt(0).toString().split('').map(Number)); 
        
        // If number, parse and push
        else newArray.push(parseInt(stringCopy.charAt(0)));

        // Subtract first character from string
        stringCopy = stringCopy.substr(1);

        // Recurse
        return encodedArrayRecursion(stringCopy, newArray);
    }

    return newArray;
}

module.exports = encodedArrayRecursion;