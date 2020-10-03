const fs = require("fs");
module.exports = {
  isInputCorrect,
  transformActionMode,
  transformShiftOption,
};

function isInputCorrect(value) {
  if (fs.existsSync(value) && fs.lstatSync(value).isFile()) {
    return value;
  }

  process.stderr.write("The file cannot be found or cannot be accessed");
  process.exit(1);
}

function transformActionMode(value) {
  if (value === "encode") {
    return true;
  }
  if (value === "decode") {
    return false;
  }
  process.stderr.write(
    'something went wrong with encode option, please use "encode" or "decode" to specify this option'
  );
  return process.exit(1);
}

function transformShiftOption(value) {
  return Number(value);
}
