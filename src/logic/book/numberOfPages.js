const throwException = require('../util/throwException');

const key = 'numberOfPages';
module.exports.numberOfPages = function (value) {
  if (!Number.isInteger(value)) {
    throwException.invalidValue(key, value, 'The value must be an integer and greater than 0.');
  }
  if (value <= 0) {
    throwException.invalidValue(key, value, 'The value must be greater than 0.');
  }
  return value;
};
