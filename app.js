const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

var options = {
  swaggerOptions: {
    validatorUrl: null
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
