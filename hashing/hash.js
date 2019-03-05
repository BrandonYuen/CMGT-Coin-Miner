// Hashing algorithm for CMGT-Coin

// Dependencies
const crypto = require('crypto');
const encodedArray = require('./encodedArray');
const encodedArrayRecursion = require('./encodedArrayRecursion');
const combineRows = require('./combineRows');
const fillRow = require('./fillRow');

function hash(string) {

    /*
        STAP 1: Tekst omgezet naar unicode karakters (ASCII waardes) 
        STAP 2: Alle getallen worden gesplitst en los in een array geplaatst
    */

    let numbersArray = encodedArrayRecursion(string);

    /*
        STAP 3: Uit deze array worden de eerste 2 blokken van 10 getallen gehaald
    */

    // Create rows (arrays) of each 10 numbers from numbersArray
    let rows = [];
    while (numbersArray.length > 0) {
        rows.push(fillRow(numbersArray.splice(0, 10)));
    }

    /* 
        STAP 4: Deze twee blokken worden bij elkaar opgeteld:
            - Van beide blokken wordt het eerste getal genomen
            - deze worden bij elkaar opgeteld
            - van de uitkomt wordt modulus 10 genomen 
            - Bijv. (7 + 8) % 10 = 15 % 10 = 5
            - Dit wordt 10 x gedaan voor alle getallen uit beide blokken van 10 getallen.
            - Dit levert een nieuwe reeks van 10 getallen op 
    */

    // Keep summing first and second rows together untill we have one row left
    let finalRow = combineRows(rows);

    // Create string from finalRow array
    let finalString = '';
    for (let i in finalRow) {
        finalString += finalRow[i];
    }

    // SHA256
    let hashedString = crypto.createHash('sha256').update(finalString).digest('hex');

    return hashedString;
}

module.exports = hash;