const { INVALID_VALUES_MESSAGE } = require('../../src/api/exception/messages/errorMessages');
const { valueNotValid, valueNotValidWithSuffix } = require('../../src/api/exception/messages/errorDetailMessages');

describe('Throw Exception', () => {
  const throwException = require('../../src/logic/util/throwException');

  it('throw exception with key and value', () => {
    let thrownError;
    try {
      throwException.invalidValue('key1', 'value1');
    } catch (e) {
      thrownError = e;
    }

    expect(thrownError.error).toBe(INVALID_VALUES_MESSAGE);
    expect(thrownError.errorDetail).toBe(valueNotValid('key1', 'value1'));
  });

  it('throw exception with key, value, and suffix', () => {
    let thrownError;
    try {
      throwException.invalidValue('key1', 'value1', 'suffix1');
    } catch (e) {
      thrownError = e;
    }

    expect(thrownError.error).toBe(INVALID_VALUES_MESSAGE);
    expect(thrownError.errorDetail).toBe(valueNotValidWithSuffix('key1', 'value1', 'suffix1'));
  });
});
