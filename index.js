var restify = require('restify');

var meta = require('./src/meta');
var camera = require('./src/camera');

var server = restify.createServer();

server.get('/', meta);
server.get('/camera', camera);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
