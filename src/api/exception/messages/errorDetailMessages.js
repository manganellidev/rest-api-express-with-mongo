module.exports = {
  valueNotValid: (key, value) => `The ${key} '${value}' is not valid.`,
  valueNotValidWithSuffix: (key, value, suffix) => `The ${key} '${value}' is not valid. ${suffix}`,
  valueNonNull: 'The value must not be null or empty.',
  valueAlphanumericWithAccentAndSpace: 'The value must be alphanumeric, and it may has accent and/or space.',
  valueAlphabeticWithAccentAndSpace: 'The value must be alphabetic, and it may has space.',
  maxLength: (length) => `The value must have at most ${length} characters.`,
  resourceNotFound: (resourceType, resourceId) => `The ${resourceType} with id '${resourceId}' cannot be found.`,
};
