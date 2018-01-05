// Module imports
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// Routes imports
const api = require('./routes/api');

// App setup
const app = express();
// App.use
app.use(bodyParser.json());

// Routes
app.use('/api', api);

// Http server.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

server.on('error', (error) => {
  if (error.syscall !== 'listen')
    throw error;

  let bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
});
// Code!

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}
