var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send('<b>Tjena världen!</b><div>under?</div>' + __dirname);
  res.sendFile(__dirname+'/home.html');
});

app.get('/stamina', function (req, res) {
  res.send('<i>OH OOHH</i>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
