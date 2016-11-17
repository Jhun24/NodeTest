var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb:localhost:27017/test');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function callback(){
  console.log("db Connection")
});

app.set('view engine','html');
app.set('views', 'views')

app.use(express.static('public'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/template',function(req, res){
  //req.query.id
  res.send(req.query.id)
});

app.get('/',function(req, res){
  res.render('index.html');
});

app.post('/testRec',function(req, res){
  var s = req.body.title;
  console.log(s);
  res.send(s);
});

app.listen(3000,function(){
  console.log("Port 3000 Connection");
})
