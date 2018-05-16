const expenseRoute =  require('express').Router(),
      request = require('superagent'),
      mongodb = require('mongodb').MongoClient;
      //var url = "mongodb://admin:admin123@ds111559.mlab.com:11559/helpinghearts";
      var url="mongodb://172.20.0.2:27017/";


expenseRoute.post('/addExpense',function (req, res) {
var amount=req.query.amount;
var bill_voucher=req.query.selectedValue;
var date=req.query.date;
var spentBy=req.query.spentBy;
var spentFor=req.query.spentFor;
var spentTowards=req.query.spentTowards;
var modeOfCash=req.query.modeOfCash;
var description=req.query.description;
  mongodb.connect(url,function(err,client){
    if(err)
    {
      throw err;
    }
    else{
      console.log('Connected to MongoDB');
      const db = client.db('helpinghearts');
      db.collection('expenses').insertOne({amount:amount,bill_voucher: bill_voucher,date:date,spentBy:spentBy,
        spentFor:spentFor,spentTowards:spentTowards,modeOfCash:modeOfCash,description:description},
        function(err,result){
        if(err){
          console.log(err);
        }
       console.log("details are added successfully");
      });
    }


  });
  res.send('All fine');
})

module.exports = expenseRoute;
