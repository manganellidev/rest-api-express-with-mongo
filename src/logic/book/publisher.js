const { isNullOrEmpty, ensureMaxLength } = require('../util/contracts');
const suffixErrorMsg = require('../../api/exception/messages/errorDetailMessages');
const throwException = require('../util/throwException');

module.exports.publisher = function (value) {
  if (isNullOrEmpty(value)) {
    return '';
  }
  if (!ensureMaxLength(value, 40)) {
    throwException.invalidValue('publisher', value, suffixErrorMsg.maxLength(40));
  }

  return value;
};
