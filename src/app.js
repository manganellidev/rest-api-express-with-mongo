const mongoose = require('mongoose');
const express = require('express');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 8080;

const swagger = require('./api/middleware/documentation/swagger');
const logger = require('./api/middleware/log/logger');
const router = require('./api/routes/books.routes');
const { handleEndpointNotFound, handle } = require('./api/exception/handler');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger.specs));
app.use(logger.setLogContext);
app.use(router);
app.use(handleEndpointNotFound);
app.use(handle);

mongoose.connect('mongodb://mongo:27017/tag-books', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`App started on port ${port}`);
  });
});
