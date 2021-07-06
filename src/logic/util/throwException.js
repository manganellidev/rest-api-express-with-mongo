const { InvalidValueException } = require('../../api/exception/exceptions');
const { valueNotValid, valueNotValidWithSuffix } = require('../../api/exception/messages/errorDetailMessages');

module.exports = {
  invalidValue(key, value, suffix) {
    if (suffix) {
      throw new InvalidValueException(valueNotValidWithSuffix(key, value, suffix));
    }
    throw new InvalidValueException(valueNotValid(key, value));
  },
};
