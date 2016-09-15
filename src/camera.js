
var fs = require('fs');
var spawn = require('child_process').spawn;

module.exports = function respond(req, res, next) {

  var lastCapture = __dirname.replace('src', 'camera/last.jpg');

  var child = spawn('/bin/sh', ['-c', "raspistill --width 640 --height 480 --quality 100 --nopreview --output " + lastCapture]);

  return setTimeout(function() {

    fs.readFile(lastCapture, function(err, data) {
        res.setHeader('Content-Type', "image/jpeg" );
        res.end(data, 'binary');
        child.stdin.end();
        next();
    });

  }, 5 * 1000);

}
