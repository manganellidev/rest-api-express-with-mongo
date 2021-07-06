const { isNullOrEmpty, isAlphabetWithAccentAndSpace, ensureMaxLength } = require('../util/contracts');
const suffixErrorMsg = require('../../api/exception/messages/errorDetailMessages');
const throwException = require('../util/throwException');

const key = 'authors';
module.exports.author = function (values) {
  if (!(values instanceof Array)) {
    throwException.invalidValue(key, values, 'Please inform as an array.');
  }

  values.forEach((author) => {
    if (isNullOrEmpty(author)) {
      throwException.invalidValue(key, author, suffixErrorMsg.valueNonNull);
    }
    if (!isAlphabetWithAccentAndSpace(author)) {
      throwException.invalidValue(key, author, suffixErrorMsg.valueAlphabeticWithAccentAndSpace);
    }
    if (!ensureMaxLength(author, 40)) {
      throwException.invalidValue(key, author, suffixErrorMsg.maxLength(40));
    }
  });

  return values;
};
