const winston = require('winston');

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
  ],
};

module.exports = {
  setLogContext(req, res, next) {
    req.logger = winston.createLogger(logConfiguration);
    next();
  },
};
