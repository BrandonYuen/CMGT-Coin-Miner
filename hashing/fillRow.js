
function fillRow(array) {
    let arrayCopy = array.slice();

    for (let i = 0; arrayCopy.length < 10; i++) {
        arrayCopy.push(i);
    }

    return arrayCopy;
}

module.exports = fillRow;