const http = require('http');

const config = require('./config/env');

require('./server/db');

const express = require('./server/express');

const app = express();

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
