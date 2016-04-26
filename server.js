var express = require('express');
var app = express();


app.use(express.static(__dirname + '/src'));

app.get('/', function(req,res) {
  res.json({balls: "Yay"});
})

app.listen(3000, function() {
  console.log(" YOU ARE LISTENING ON PORT 3000");
})
