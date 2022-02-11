const app = require('./app');
const http = require('http');

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, 'localhost');
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error) {
    throw error;
  }
}
function onListening() {
  const addr = server.address();
  // const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log(`Listening on ${addr.address}:${addr.port}`);
}
