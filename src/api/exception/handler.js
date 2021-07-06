const { EndpointNotFoundException, UnexpectedException } = require('./exceptions');

const handlers = {
  InvalidValueException: (err, req, res) => {
    const { status, error, errorDetail } = err;
    return res.status(status).json({ error, errorDetail });
  },
  ResourceNotFoundException: (err, req, res) => {
    const { status, error, errorDetail } = err;
    return res.status(status).json({ error, errorDetail });
  },
  UnexpectedException: (err, req, res) => {
    const genericError = new UnexpectedException();
    return res.status(genericError.status).json({ error: genericError.error });
  },
};

const logError = (req, err) => req.logger.error(`${JSON.stringify(err.message)} ---***---***---`);

// eslint-disable-next-line no-unused-vars
const handle = (err, req, res, next) => {
  logError(req, err);
  if (err.name in handlers) {
    return handlers[err.name](err, req, res);
  }
  return handlers.UnexpectedException(err, req, res);
};

const handleEndpointNotFound = (req, res) => {
  const { status, error } = new EndpointNotFoundException();
  logError(req, { message: error });
  return res.status(status).json({ error });
};

module.exports = {
  handleEndpointNotFound,
  handle,
};
