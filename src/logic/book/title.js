const { isNullOrEmpty, isAlphanumWithAccentAndSpace, ensureMaxLength } = require('../util/contracts');
const suffixErrorMsg = require('../../api/exception/messages/errorDetailMessages');
const throwException = require('../util/throwException');

const key = 'title';
module.exports.title = function (value) {
  if (isNullOrEmpty(value)) {
    throwException.invalidValue(key, value, suffixErrorMsg.valueNonNull);
  }
  if (!isAlphanumWithAccentAndSpace(value)) {
    throwException.invalidValue(key, value, suffixErrorMsg.valueAlphanumericWithAccentAndSpace);
  }
  if (!ensureMaxLength(value, 40)) {
    throwException.invalidValue(key, value, suffixErrorMsg.maxLength(40));
  }

  return value;
};
