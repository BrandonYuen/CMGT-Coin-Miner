
function sumRows(row1, row2) {
    let row1Copy = row1.slice();
    let row2Copy = row2.slice();

    let newRow = [];

    for (let i = 0; i < 10; i++) {
        newRow.push( (row1Copy.shift() + row2Copy.shift()) % 10);
    }

    return newRow;
}

module.exports = sumRows;