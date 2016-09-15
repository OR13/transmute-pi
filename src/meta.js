
var package = require('../package.json');

module.exports = function respond(req, res, next) {
  res.send({
    version: package.version
  });
  next();
}
