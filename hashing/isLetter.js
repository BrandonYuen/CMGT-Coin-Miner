function isLetter(str) {
    if (str.length === 1 && str.match(/[a-z]/i)) {
        return true;
    }
    return false;
}
module.exports = isLetter;