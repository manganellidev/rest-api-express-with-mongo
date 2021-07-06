/* eslint-disable max-classes-per-file */
const errorMessages = require('./messages/errorMessages');

class EndpointNotFoundException extends Error {
  constructor() {
    super();
    this.name = 'EndpointNotFoundException';
    this.status = 404;
    this.error = errorMessages.NOT_FOUND_ENDPOINT_MESSAGE;
  }
}

class InvalidValueException extends Error {
  constructor(errorDetail) {
    super();
    this.name = 'InvalidValueException';
    this.status = 400;
    this.error = errorMessages.INVALID_VALUES_MESSAGE;
    this.errorDetail = errorDetail;
    this.message = this.createErrorMessage();
  }

  createErrorMessage() {
    return { status: this.status, error: this.error, errorDetail: this.errorDetail };
  }
}

class ResourceNotFoundException extends Error {
  constructor(errorDetail) {
    super();
    this.name = 'ResourceNotFoundException';
    this.status = 404;
    this.error = errorMessages.NOT_FOUND_REQUEST_MESSAGE;
    this.errorDetail = errorDetail;
    this.message = this.createErrorMessage();
  }

  createErrorMessage() {
    return { status: this.status, error: this.error, errorDetail: this.errorDetail };
  }
}

class UnexpectedException extends Error {
  constructor() {
    super();
    this.name = 'UnexpectedException';
    this.status = 500;
    this.error = errorMessages.UNEXPECTED_EXCEPTION_MESSAGE;
    this.message = this.createErrorMessage();
  }

  createErrorMessage() {
    return { status: this.status, error: this.error };
  }
}

module.exports = {
  InvalidValueException,
  EndpointNotFoundException,
  ResourceNotFoundException,
  UnexpectedException,
};
