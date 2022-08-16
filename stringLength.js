const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error();
  }
  return str.length;
}

module.exports = stringLength;
  