module.exports = {
  isNullOrEmpty: (value) => (value === null || value === ''),
  isAlphanumWithAccentAndSpace: (value) => new RegExp('^[A-Za-zÀ-ú0-9\\s]+[A-Za-zÀ-ú0-9\\s]+$(\\.0-9+)?').test(value),
  isAlphabetWithAccentAndSpace: (value) => new RegExp('^[A-Za-zÀ-ú\\s]+[A-Za-zÀ-ú\\s]+$').test(value),
  isNumericWithDash: (value) => new RegExp('^[0-9-\\s]+[0-9-\\s]+$(\\.0-9+)?').test(value),
  ensureMaxLength: (value, length) => value.length <= length,
};
