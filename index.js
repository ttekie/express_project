let express = require('express');
let path = require('path');
let app = express();
const PORT = 8080;

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname + '/contact_me.html'));
});
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/404.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
