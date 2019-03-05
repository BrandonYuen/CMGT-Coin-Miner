
const reqp = require("request-promise")

function postNonce(nonce) {

    let options = {
        method: 'POST',
        uri: 'http://programmeren9.cmgt.hr.nl:8000/api/blockchain',
        body: {
            nonce: nonce,
            user: 'TheLegend27'
        },
        json: true // Automatically parses the JSON string in the response
    };
     
    return reqp(options)
        .then(function (json) {
            return json;
        })
}

module.exports = postNonce;