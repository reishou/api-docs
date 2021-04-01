const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yml')

let options = {
  //
};

app.use('/api-docs', swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, options))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
