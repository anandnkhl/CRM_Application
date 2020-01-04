var mongo = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var url = "mongodb://127.0.0.1:27017/"

app.use(bodyParser.urlencoded({ extended: true }));

//To verify login for CRM USER
app.post('/verifyUser', function(req, res) {
	var usrID =  parseInt(req.body.UserId, 10);
	var pas = req.body.Password;
     var verified = "no";
     var query = {$and:[ {UID : usrID}, {Password : pas}]};
	mongo.connect(url,  {
          useNewUrlParser: true, useUnifiedTopology: true
          },function(err, db) {
               if (err) throw err;
               var dbo = db.db("CRMDatabase");
               dbo.collection("CRMUser").find(query).toArray(function(err, result) {
                    if (err) throw err;
                    if(result.length != 0){
                         console.log('yes');
                         verified = "yes";
                    }else{
                         console.log('no');
                         verified = "no";
                    }
                    db.close();
                    if( verified == "no"){
                         console.log('----->no');
                         return res.sendFile( __dirname + '/start.html');
                    }else if(verified == "yes"){
                         console.log('----->yes');
                         return res.sendFile( __dirname + '/dashboard.html');
                    }
               });
     });
});



app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});