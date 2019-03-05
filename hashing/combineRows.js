
const sumRows = require('./sumRows');

function combineRows(array) {
    a = array.slice();
    if (a.length > 1) {
        a.unshift(sumRows(a.shift(), a.shift()));
        return combineRows(a);
    } else {
        return a[0];
    }
}

module.exports = combineRows;