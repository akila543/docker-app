'use strict'
const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app)
    , path = require('path')
    , assert = require('assert')
    , PORT = process.env.PORT || 1104 ;
const expenseRoute = require('./routes/expense.route.js');
 var mongodb = require('mongodb').MongoClient;
      var url="mongodb://process.env.MONGO_HOST:27017/";
app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

app.use(express.static('./../'));

app.use('/',(req,res,next)=>{
  console.log('inside routes');
  next();

},expenseRoute);

  mongodb.connect(url,function(err,client){
    if(err)
    {
      throw err;
    }
    else{
      console.log('Connected to MongoDB');
    
    }


  });

//App server ---------->
module.exports = server.listen(PORT, err => {
  if(err){
    throw err
  }
  console.log('helping hearts Server running on 1100')
})
