const moment = require('moment');
const { isNullOrEmpty } = require('../util/contracts');
const throwException = require('../util/throwException');

const key = 'publishingDate';
module.exports.publishingDate = function (value) {
  if (isNullOrEmpty(value)) {
    return '';
  }

  const date = moment(value, 'DD-MM-YYYY');
  if (!date.isValid()) {
    throwException.invalidValue(key, value);
  }
  if (!date.isAfter('1999-12-31')) {
    throwException.invalidValue(key, value, 'Please inform a date after year 2000.');
  }

  return date;
};
