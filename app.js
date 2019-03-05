const hash = require('./hashing/hash');
const API = require('./api/all');

let nonce = {
    value: -1,
    valid: false 
};
let lastBlock = {};

// Brute force hash base string + random nonce
function startMining() {
    while (!nonce.valid && !isExpired(lastBlock)) {

        // Create base
        let base = baseStringForNewBlock(hashOfLastBlock());
    
        // Try new nonce
        nonce.value++;
        let tryHash = hash(base + nonce.value);
        console.log('['+nonce.value+'] ' + tryHash);
    
        if (tryHash.slice(0, 4) === '0000') {
            nonce.valid = true;
            console.log(' ');
            console.log(' ');
            console.log('Found nonce! ('+nonce.value+')');
            console.log(' ');
            console.log(' ');
    
            // Post valid nonce to API with name and student number
            API.postNonce(nonce.value)
            .then((result) => {
                console.log('Result of POST: ', result);
            }).catch((err) => {
                console.log(err.cause);
            })
        }
    }
    
    // If latest block is no longer valid, get a new one
    if (isExpired(lastBlock)) {
        console.log('[MINER] Last block is expired.');
        updateLastBlock();
    }
}

updateLastBlock();

function isExpired(block) {
    let remainingTime = block.expiricyDate.getTime() - new Date(Date.now()).getTime();
    return (remainingTime <= 0)
}

// Get next blockchain data from API
function updateLastBlock() {
    console.log('[UPDATING LAST BLOCK]')
    API.getLastBlock()
    .then( (res) => {
        // Update lastblock
        lastBlock = res;

        // Add an expiricy date
        lastBlock.expiricyDate = new Date(Date.now() + res.countdown);

        // Reset nonce counter
        nonce.value = -1;

        console.log('...done!');

        // Start mining
        startMining();
    })
    .catch( (error) => {
        console.log(error.cause);
    });
}

// Create and return the hash of the last block
function hashOfLastBlock() {
    let base = lastBlock.blockchain.hash;
    for (transaction of lastBlock.blockchain.data) {
        base += transaction.from;
        base += transaction.to;
        base += transaction.amount;
        base += transaction.timestamp;
    }
    base += lastBlock.blockchain.timestamp;
    base += lastBlock.blockchain.nonce;

    return hash(base);
}

// Create and return base string of new block
function baseStringForNewBlock(hashOfLastBlock) {
    let base = hashOfLastBlock;
    for (transaction of lastBlock.transactions) {
        base += transaction.from;
        base += transaction.to;
        base += transaction.amount;
        base += transaction.timestamp;
    }
    base += lastBlock.timestamp;

    return base;
}