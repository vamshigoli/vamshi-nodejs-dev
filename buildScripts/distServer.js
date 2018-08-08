import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console*/
const port = 3000;
const app = express();

// for gzip compression
app.use(compression());
// static files from the dist directory
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users', function(req, res){
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1,"firstName":"vamshi","lastName":"goli","email":"vamshi@tapresume.com"},
    {"id":2,"firstName":"gopal","lastName":"kumar","email":"gopal@tapresume.com"},
    {"id":3,"firstName":"vinod","lastName":"kumar","email":"vinod@tapresume.com"}
  ]);

});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
