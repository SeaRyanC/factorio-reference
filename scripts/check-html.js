const path = require('path');
const fs = require('fs');
const html5Lint = require('html5-lint');

fs.readFile(path.join(__dirname, '../index.html'), 'utf8', function (err, html) {
  if (err) throw err;

  html5Lint(html, function (err, results) {
    results.messages.forEach(function (msg) {
      const type = msg.type;
      const message = msg.message;
      console.log(JSON.stringify(msg));
      console.log("HTML5 Lint (%s) [%s]: %s", msg.lastLine, type, message);
    });
  });
});
