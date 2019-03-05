
const reqp = require("request-promise")

function getLastBlock() {

    let options = {
        uri: 'http://programmeren9.cmgt.hr.nl:8000/api/blockchain/next',
        json: true // Automatically parses the JSON string in the response
    };
     
    return reqp(options)
        .then(function (json) {
            return json;
        })
}

module.exports = getLastBlock;