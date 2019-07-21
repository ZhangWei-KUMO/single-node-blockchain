const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(timestamp, data, previousH) {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousH;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
  }

}

module.exports = Block;