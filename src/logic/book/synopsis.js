const { isNullOrEmpty, ensureMaxLength } = require('../util/contracts');
const suffixErrorMsg = require('../../api/exception/messages/errorDetailMessages');
const throwException = require('../util/throwException');

module.exports.synopsis = function (value) {
  if (isNullOrEmpty(value)) {
    return '';
  }
  if (!ensureMaxLength(value, 300)) {
    throwException.invalidValue('synopsis', value, suffixErrorMsg.maxLength(300));
  }

  return value;
};
