const { sha3_512 } = require("js-sha3");

const hash = (rawText, salt) => sha3_512(salt + rawText);

const verifyHash = (hashedText, salt, rawText) => hash(rawText, salt) === hashedText;

module.exports = {
    hash,
    verifyHash,
};