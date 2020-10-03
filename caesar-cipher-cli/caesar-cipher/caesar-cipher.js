const { Transform } = require("stream");
const commander = require("commander");
const caesarCipher = new Transform();
caesarCipher._transform = (chunk, encoding, callback) => {
  try {
    callback(
      null,
      runCipher(chunk.toString(), commander.shift, commander.actionMode)
    );
  } catch (error) {
    callback(error);
  }
};

module.exports = {
  runCipher: caesarCipher,
};

function runCipher(input, shift, action) {
  shift = action ? shift : 26 - shift;
  const lowerCaseAlphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCaseAlphabetArr = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("");

  let cipheredString = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const alphabetArr = char.match(/[A-Z]/g)
      ? upperCaseAlphabetArr
      : lowerCaseAlphabetArr;
    const idx = alphabetArr.indexOf(char);

    if (idx === -1) {
      cipheredString += char;
      continue;
    }

    const encodedIdx = (idx + shift) % 26;
    cipheredString += alphabetArr[encodedIdx];
  }
  return cipheredString;
}
