const fs = require("fs");
const { pipeline } = require("stream");

const cipherScript = require("../caesar-cipher/caesar-cipher");
module.exports = {
  transform,
};

function transform(input, output) {
  if (input) {
    input = fs.createReadStream(input);
  } else {
    input = process.stdin;
  }

  if (output) {
    output = fs.createWriteStream(output);
  } else {
    output = process.stdout;
  }

  pipeline(input, cipherScript.runCipher, output, (error) => {
    if (error) {
      process.stderr.write("Something went wrong" + "\n" + error.message);
      process.exit(1);
    }
  });
}
