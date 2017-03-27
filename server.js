var express = require('express');
var app = express();


app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendfile('./dist/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
