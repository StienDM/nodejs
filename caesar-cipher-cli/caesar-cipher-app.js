const commander = require("commander");
const dataTransform = require("./data-transform/data-transform");
const {
  isInputCorrect,
  transformActionMode,
  transformShiftOption,
} = require("./caesar-cipher.service");

commander
  .requiredOption("-s, --shift <number>", "", transformShiftOption)
  .option("-i, --input <string>", "path to a file or string", isInputCorrect)
  .option("-o, --output <string>", "path to the file creation location")
  .requiredOption("-a, --actionMode <string>","encode or decode file",transformActionMode)
  .parse();

dataTransform.transform(
  commander.input,
  commander.output,
  commander.shift,
  commander.actionMode
);
