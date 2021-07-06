const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TAG Books',
    version: '0.0.1',
    description:
          'This is a simple CRUD API application made with Express and documented with Swagger',
  },
  host: 'localhost:8080/',
};

const options = {
  swaggerDefinition,
  apis: ['./**/*.yaml'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
};
