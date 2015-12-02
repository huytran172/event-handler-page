var express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, function () {
  console.log('server is running on ' + port);
});