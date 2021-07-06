const { isNullOrEmpty, isNumericWithDash } = require('../util/contracts');
const suffixErrorMsg = require('../../api/exception/messages/errorDetailMessages');
const throwException = require('../util/throwException');

const key = 'isbn';
module.exports.isbn = function (value) {
  if (isNullOrEmpty(value)) {
    throwException.invalidValue(key, value, suffixErrorMsg.valueNonNull);
  }
  if (!isNumericWithDash(value)) {
    throwException.invalidValue(key, value, 'The value must be numeric, and it may have dash(es).');
  }
  return value;
};
