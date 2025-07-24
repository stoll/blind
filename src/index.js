const { hash, verifyHash } = require("./hash");

// dump the hash of a raw text, and verify it
const salt = "salt";

const rawText = "Hello, world!";

const hashedText = hash(rawText, salt);

console.log("Raw Text:", rawText);
console.log("Hashed Text:", hashedText);
console.log("Hash matches raw text:", verifyHash(hashedText, salt, rawText) ? "Yes" : "No");